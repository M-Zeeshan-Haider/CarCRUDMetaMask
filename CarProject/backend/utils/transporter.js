const nodemailer = require("nodemailer");

const sendMail = async (to, token) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'lionel.turner4@ethereal.email',
        pass: '57XKtDJ7q8khJWwd5Y'
    },
  });

  const emailBody = `
    <h2>Please verify your email address</h2>
    <p>Below is the Password</p>
    <strong>${token}</strong>
  `;

  let info = await transporter.sendMail({
    from: '<cars@gmail.com>', // sender address
    to,
    subject: "Password Login", // Subject line
    html: emailBody,
  });
  return info;
};

module.exports = sendMail;