import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import nodemailer from "nodemailer";
import cors from "cors";
import env from "dotenv";

env.config();
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const baseurl = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "build"
);

app.use(express.static(baseurl));
//********************* to send mail from the user */

app.post("/sendMail", async (req, res) => {
  const { name, email, message, phone } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `<${process.env.GMAIL_ID}>`,
      to: "b122132@iiit-bh.ac.in",
      subject: " new mail from Yash Nayak",
      text: `name : ${name}  Email : ${email} phone : ${phone} message: ${message}`,
    });
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully!");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(baseurl, "index.html")); // Use path.join to correctly construct file path
});

app.listen(port, () => {
  console.log("your site is live at localhost:5000");
});
