declare module "nodemailer" {
  type SendMailOptions = {
    to: string;
    from: string;
    replyTo?: string;
    subject: string;
    text: string;
  };

  type Transporter = {
    sendMail(options: SendMailOptions): Promise<unknown>;
  };

  const nodemailer: {
    createTransport(url: string): Transporter;
  };

  export default nodemailer;
}
