import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendwithMail = async (req, res) => {
  try {
    const { formData } = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Portfolio:-(Contact Form Submission)',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
    };
    const resp = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Thanks For Submit!', data: resp, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message, data: null, success: false });
  }
};
