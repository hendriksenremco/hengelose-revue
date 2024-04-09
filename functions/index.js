/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require('firebase-admin');
const StoryblokClient  = require("storyblok-js-client");
admin.initializeApp()
const db = admin.firestore()
// db.settings({ ignoreUndefinedProperties: true})

// admin.firestore().collection('storyblok').doc('test').set({id:1, hallo:'test'})
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.getStoryblok = onRequest((request, response) => {
  const urlKey = request.originalUrl
  const Storyblok = new StoryblokClient({
    accessToken: "Jehol4gVSqVfcrlkszKyhgtt",
  });

  db.collection('storyblok').doc(urlKey).get().then(doc => {
    console.log('from firestore')
    const snapshot = doc.data()
    response.send(snapshot.story)
  }).catch(() => {
    console.log('from storyblok')
    Storyblok.get(request.originalUrl).then(data => {
      db.collection('storyblok').doc(urlKey).set({ 
        story: data.data.story,
        timestamp: Date.now()
      })
      response.send(data.data.story)
    })
  })
});

exports.purgeStoryblok = onRequest((request, response) => {
  const urlKey = request.originalUrl
  db.collection('storyblok').doc(urlKey).delete()
  response.send("Purge");
});
