/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const StoryblokClient  = require("storyblok-js-client");
const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest } = require("firebase-functions/v2/https");
const admin = require('firebase-admin');

setGlobalOptions({region:'europe-west3'})
admin.initializeApp()
const db = admin.firestore()
db.settings({ ignoreUndefinedProperties: true})

exports.getStoryblok = onRequest({cors: true}, (request, response) => {
  const urlKey = request.originalUrl.replace(/\//g, '-');
  const Storyblok = new StoryblokClient({
    accessToken: "Jehol4gVSqVfcrlkszKyhgtt"
  });

  db.collection('storyblok').doc(urlKey).get().then(doc => {
    console.log('from firestore')
    const snapshot = doc.data()
    response.send(snapshot.data)
  }).catch((err) => {
    console.log('from storyblok')
    Storyblok.get(request.path, {...request.query}).then(data => {
      db.collection('storyblok').doc(urlKey).set({ 
        data: data.data,
        timestamp: Date.now()
      })
      response.send(data.data)
    }).catch(err => {
      response.send(err)
      console.log(err)
    })
  })
});

exports.purgeStoryblok = onRequest({cors: true}, (request, response) => {
  const inputSlug = request.body.full_slug

  if(!inputSlug) {
    return response.send('no purge')
  }

  db.collection('storyblok').get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      let shouldDelete = false
      const data = doc.data()

      if (data.data.story?.full_slug === inputSlug) {
        shouldDelete = true
      }

      if(data.data.stories) {
        data.data.stories.forEach(story => {
          if(story.full_slug === inputSlug) {
            shouldDelete = true
          }
        })
      }

      if(shouldDelete) {
        console.log('should delete', doc.id)
        db.collection("storyblok").doc(doc.id).delete()
      }
    })

    response.send('purge')
  })
  .catch(error => {
    console.log(error)
  })
  // const urlKey = request.originalUrl.replace(/\//g, '-')
  // db.collection('storyblok').doc(urlKey).delete()
  // response.send("Purge");
});
