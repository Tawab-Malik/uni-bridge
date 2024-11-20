import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { firstname, lastname, email, phone, message } = await req.json();

        // Validate fields
        if (!firstname || !lastname || !email || !phone  || !message) {
            return new Response("All fields are required.", { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            // subject: `Contact Form Submission: ${subject}`,
            text: `
                First Name: ${firstname}
                Last Name: ${lastname}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return new Response("Email sent successfully.", { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response("Failed to send email.", { status: 500 });
    }
}
