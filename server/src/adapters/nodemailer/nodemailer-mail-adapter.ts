import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "506b969d0b653e",
        pass: "4418d64f0e204d"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData){  
        await transport.sendMail({
            from: "Equipe Feedget <equipe@feedget.com>",
            to: "Guilherme Saoncella <guisaoncella@gmail.com>",
            subject,
            html: body,
        });  
    }
}