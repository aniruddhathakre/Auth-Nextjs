import nodemailer from "nodemailer";
import User from "@/model/userModel";
import bcryptjs from "bcryptjs";

// Define an interface for the function parameters to provide type safety
interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET"; // Only these two values are expected
  userId: string; // Assuming userId is a string (e.g., MongoDB ObjectId)
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailParams) => {
  try {
    // create a hash token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Use 'const' instead of 'var' for transport
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER!, // The '!' asserts that the value is not null/undefined
        pass: process.env.NODEMAILER_PASS!,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL!,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
        or copy and paste the link below in your browser. <br> ${
          process.env.DOMAIN
        }/verifyemail?token=${hashedToken}
        </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);

    return mailresponse;
  } catch (error: unknown) {
    // Use 'unknown' for caught errors
    // Ensure 'error' is an instance of Error before accessing .message
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    // If it's not an Error object, rethrow as a generic Error
    throw new Error("An unknown error occurred during email sending.");
  }
};
