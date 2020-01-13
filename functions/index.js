const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.https.onRequest((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'content-type');
    // response.contentType('json')

    const db = admin.firestore();
    const doc = db.collection('messages');

    const data = JSON.parse(request.body);

    doc.add({
        date: admin.firestore.Timestamp.fromDate(new Date()),
        name: data.name,
        email: data.email,
        company: data.company,
        subject: data.subject,
        message: data.msg
    })

    response.sendStatus(200);
});
