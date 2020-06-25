const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'goesc_@hotmail.de',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const deleteUserEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'goesc_@hotmail.de',
        subject: `We are sorry ${name}. We could not satisfy you`,
        text: `Tell us, why did you make that decision?`
    })
}

module.exports = {
    sendWelcomeEmail,
    deleteUserEmail
}