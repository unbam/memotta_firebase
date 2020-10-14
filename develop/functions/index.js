const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.region('asia-northeast1').https.onRequest((request, response) => {
    // response.send("Hello from Firebase!");
    return {test: 'hello world'};
   });

exports.helloWorld2 = functions.region('asia-northeast1').https.onCall((data, context) => {
    return {
        test: 'hello world',
      };
  });