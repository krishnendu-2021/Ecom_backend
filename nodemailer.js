import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOrderConfirmation = async (to, orderId) => {
  await transporter.sendMail({
    from: `"Thrylux" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Order Placed - Thrylux",
    html: `
      <h2>Thank you for your order!</h2>
      <p>Your order <b>${orderId}</b> has been placed successfully.</p>
      <p>We appreciate your business.<br/>- Thrylux Team</p>
    `,
  });
};
