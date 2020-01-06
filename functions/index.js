const functions = require('firebase-functions');
const nodemailer = require('nodemailer')



const trans = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: functions.config().email.addr,
        pass: functions.config().email.pass,
    }
});

exports.sendMessage = functions.https.onRequest((request, response) => {
    console.log(request);


    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'content-type')


    trans.sendMail({
        from: functions.config().email.addr,
        to: 'lm@liammcmahon.me',
        subject: '[Portfolio Site]: {' + request.body.company + '}  (' + request.body.name + ')' + request.body.subject,
        text: request.body.msg,
    }, (err, info) => {
        response.send({
            ok: true,
            err: err,
            info: info,
        })
    });

});

exports.helloWorld = functions.https.onRequest((request, response) => {
    
    response.send("Hello from Firebase!");
});
