const services = [
    { title: "Терапевтическая стоматология", desc: "Лечение кариеса, пульпита, эстетическая реставрация." },
    { title: "Хирургия", desc: "Удаление зубов любой сложности, имплантация." },
    { title: "Ортопедия", desc: "Коронки, мосты, съёмное и несъёмное протезирование." },
    { title: "Ортодонтия", desc: "Исправление прикуса брекетами и элайнерами." },
    { title: "Отбеливание", desc: "Системы Zoom, Amazing White, домашнее отбеливание." },
    { title: "Профессиональная гигиена", desc: "Air Flow, ультразвук, полировка, реминерализация." },
];

export default function Services() {
    return (
        <section id="services" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Наши услуги
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Полный спектр стоматологической помощи в одном месте.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`rounded-xl bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-gray-100 transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-3 text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}