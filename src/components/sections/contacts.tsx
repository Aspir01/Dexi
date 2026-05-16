"use client";

export default function Contacts() {
    return (
        <section id="contacts" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Контакты и запись
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Выберите удобный адрес и запишитесь онлайн.
                    </p>
                </div>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border shadow-md overflow-hidden">
                        <div className="h-80 lg:h-64">
                            <iframe
                                title="ул. Бейбулатова, 12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.5!2d47.52484!3d42.97072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU4JzE0LjYiTiA0N8KwMzEnMjkuNCJF!5e0!3m2!1sru!2sru!4v1690000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <p className="font-semibold text-gray-900">📍 ул. Бейбулатова, 12</p>
                        </div>
                    </div>
                    <div className="rounded-2xl border shadow-md overflow-hidden">
                        <div className="h-80 lg:h-64">
                            <iframe
                                title="Красноармейское с., ул. Сулеймана Стальского, 26"
                                src="https://maps.google.com/maps?q=43.018368,47.414572&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <p className="font-semibold text-gray-900">
                                📍 Красноармейское с., ул. Сулеймана Стальского, 26
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 rounded-2xl border bg-white shadow-lg animate-fade-in-up delay-200">
                    <h3 className="text-2xl font-semibold text-gray-900 p-6 pb-0">Онлайн-запись</h3>
                    <iframe
                        src="https://n1277958.yclients.com/company/1167039/personal/menu?o="
                        width="100%"
                        height="600"
                        style={{ border: 'none' }}
                        title="Онлайн-запись в стоматологию Dexi"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}