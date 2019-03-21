const functions = require('firebase-functions');
const firebase = require('firebase');

firebase.initializeApp();

exports.updateTitle = functions.firestore.document('notes/{id}').onCreate((snap, context) => {
  const { id } = context.params;
  const note = snap.data();

  return firebase.firestore().collection('notes').doc(id).update({
    ...note,
    title: `UPDATED: ${note.title}`
  })
});
