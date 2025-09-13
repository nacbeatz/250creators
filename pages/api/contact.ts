import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { amazina, email, telefone, ahoMbarizwa, ufiteYoutube, youtubeHandle, tshirtNeeded, nicheYanjye, customNiche } = req.body;

    // Configure transporter (use environment variables for credentials in production)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // e.g. info@croxstudios.com
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'mostinterestingfacts2024@gmail.com',
        subject: 'New Registration from 250Creators',
        text: `
                Amazina: ${amazina}
                Email: ${email}
                Telefone: ${telefone}
                Aho mbarizwa: ${ahoMbarizwa}
                Ufite Youtube: ${ufiteYoutube}
                Youtube Handle: ${youtubeHandle}
                Ukeneye T-shirt: ${tshirtNeeded}
                Niche yanjye: ${nicheYanjye}
                Indi itavuzwe: ${customNiche}
            `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to send email', error });
    }
}
