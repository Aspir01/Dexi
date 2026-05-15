"use client";

import { useState, type FormEvent, useEffect } from "react";

export default function Contacts() {
    return (
        <section id="contacts" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Контакты и запись
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Оставьте заявку, и мы перезвоним вам в течение 15 минут.
                    </p>
                </div>
                <div className="mt-10 grid gap-10 lg:grid-cols-2">
                    {/* Карта */}
                    <div className="overflow-hidden rounded-2xl border shadow-md h-80 lg:h-full min-h-[300px]">
                        <iframe
                            title="Google Карта проезда"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.5!2d47.52484!3d42.97072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU4JzE0LjYiTiA0N8KwMzEnMjkuNCJF!5e0!3m2!1sru!2sru!4v1690000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Форма */}
                    <div className="rounded-2xl border bg-white p-8 shadow-lg animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Обратная связь</h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => setShowModal(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setShowModal(true);
                form.reset();
            } else {
                const result = await response.json();
                setError(result.error || "Ошибка при отправке.");
            }
        } catch {
            setError("Ошибка сети. Проверьте интернет и попробуйте снова.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя *
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                        placeholder="Иван"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                        Фамилия *
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        required
                        placeholder="Иванов"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    />
                </div>
                <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон или Email *
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        placeholder="+7 (999) 123-45-67"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Опишите проблему или задайте вопрос..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    />
                </div>

                {error && (
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-sky-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Отправка..." : "Отправить"}
                </button>
            </form>

            {/* Модальное окно */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fade-in-up z-10">
                        <div className="text-5xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Сообщение отправлено!
                        </h3>
                        <p className="text-gray-600">
                            Мы свяжемся с вами в ближайшее время.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}