const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const ejs = require("ejs");

const {
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
  REDIRECT_URI
} = process.env;

const oAuthClient = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  REDIRECT_URI
);
oAuthClient.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "trinitypharmacareltd@gmail.com",
    clientId: GMAIL_CLIENT_ID,
    clientSecret: GMAIL_CLIENT_SECRET,
    refreshToken: GMAIL_REFRESH_TOKEN
  }
});
async function sendEmail({ email, name, subject, message }) {
  transporter.accessToken = await oAuthClient.getAccessToken();

  ejs.renderFile(
    __dirname + "/../contact-email.ejs",
    { name, email, subject, message },
    async (err, template) => {
      if (err) {
        console.log(err);
      } else {
        const emailOptions = {
          from: `Trinity Pharmacare User ${email}`,
          // to: "trinitypharmacareltd@gmail.com",
          to: "obikoyaadebayo55@gmail.com",
          subject: "Message from User",
          text: `User Message`,
          html: template
          // attachments: [
          //     {
          //         filename: "tros-banner.png",
          //         path: __dirname + "/../../view/images/tros-banner.png",
          //         cid: "tros-banner.png"
          //     }
          // ]
        };

        await transporter.sendMail(emailOptions);
      }
    }
  );
}

module.exports = sendEmail;
