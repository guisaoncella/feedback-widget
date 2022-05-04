import { prisma } from "./prisma";
import express from "express";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "506b969d0b653e",
        pass: "4418d64f0e204d"
    }
});

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) =>{
    const {type, comment, screenshot} = req.body;
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot, 
        }
    });

    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Guilherme Saoncella <guisaoncella@gmail.com>",
        subject: "Novo feedback",
        html: [
            "<div style=\"font-family: sans-serif; font-size: 16px; color: #111;\">",
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            "</div>",
        ].join("\n")
    });

    return res.status(201).json({data: feedback});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});