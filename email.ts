import * as nodemailer from "nodemailer";
require('dotenv').config();


class Mail
{
    constructor(
        public to?: string,
        public subject?: string,
        public message?: string,
        public host = process.env.HOST_EMAIL as string,
        public port = parseInt(process.env.PORT_EMAIL as string),
        public user = process.env.USER_EMAIL as string ,
        public password = process.env.PASSWORD_EMAIL as string
        ) { }

        
    enviaEmail()
{

    let mailOptions = {
        from: this.user,
        to: this.to,
        subject: this.subject,
        html: this.message
    };

    const transporter = nodemailer.createTransport({
        host: this.host,
        port: this.port,
        secure: false,
        auth: {
            user: this.user,
            pass: this.password
        },
        tls: { rejectUnauthorized: false }
    });


    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return error;
        } else {
            return "E-mail enviado com sucesso!";
        }
    });
}
}

export default new Mail;



