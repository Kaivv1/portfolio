import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const email = process.env.GMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOpt = {
  from: email,
  to: email,
  subject: "",
};

export const mailGenerator = new Mailgen({
  theme: "default",
  product: { name: "Portfolio", link: "asd" },
});
