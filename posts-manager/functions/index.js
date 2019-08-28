const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from MYK!");
});

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  });
  
  
  exports.postCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(doc => {
  
      const post = doc.data();
      const notification = {
        content: 'Added a new project',
        user: `${post.authFirstName} ${post.authLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      }
  
      return createNotification(notification);
  
  });