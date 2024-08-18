import { mailGenerator, mailOpt, transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type RequestBody = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === "POST") {
    const body = req.body as RequestBody;
    try {
      const emailBody = mailGenerator.generate({
        body: {
          title: `${body.name} wants to connect at email: ${body.email}`,
          intro: `${body.message}`,
        },
      });
      await transporter.sendMail({ ...mailOpt, html: emailBody }).then(() => {
        return res.status(200).json({
          message: "I've recieved your email and I will contact you shortly.",
        });
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong. Your email was not sent!" });
    }
  } else {
    return res.status(400).json({ message: "This is not a POST request" });
  }
}
