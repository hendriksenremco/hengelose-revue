const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true});

db.collection('storyblok')
.where('data.story.full_slug', '==', 'nieuws/dit-zijn-de-data-voor-2025').get()
.then(data => {
  console.log(data)
})