import * as dotenv from 'dotenv';
dotenv.config();

const auth = {
    type: 'OAuth2',
    user: 'kaustubhkumbhare02@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
};

const mailOptions = {
    from: 'kaustubhkumbhare02@gmail.com',
    to: 'vijaykumbhare72@gmail.com',
    subject: 'checking google oauth'
};

export { auth, mailOptions };
