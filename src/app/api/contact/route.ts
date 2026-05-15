import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const { firstname, lastname, contact, message } = await request.json();

        if (!firstname || !lastname || !contact) {
            return NextResponse.json(
                { error: "Пожалуйста, заполните обязательные поля." },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: "Сайт стоматологии Dexi",
            to: process.env.RECIPIENT_EMAIL,
            subject: "Новая заявка с сайта стоматологии Dexi",
            html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${firstname} ${lastname}</p>
        <p><strong>Телефон / Email:</strong> ${contact}</p>
        <p><strong>Сообщение:</strong> ${message || "—"}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Ошибка отправки письма:", error);
        return NextResponse.json(
            { error: "Не удалось отправить заявку. Попробуйте позже." },
            { status: 500 }
        );
    }
}