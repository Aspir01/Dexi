const features = [
    {
        icon: "🩺",
        title: "Опытные врачи",
        description: "Наши специалисты имеют стаж от 10 лет и регулярно повышают квалификацию.",
    },
    {
        icon: "🦷",
        title: "Современное оборудование",
        description: "Используем цифровую диагностику, лазерные технологии и 3D-моделирование.",
    },
    {
        icon: "💊",
        title: "Безопасность",
        description: "Полная стерилизация инструментов и строгий контроль качества материалов.",
    },
    {
        icon: "⭐",
        title: "Комфорт",
        description: "Уютная атмосфера, лечение без боли, седация для тревожных пациентов.",
    },
    {
        icon: "📋",
        title: "Прозрачные цены",
        description: "Предоставляем план лечения со сметой до начала процедур.",
    },
    {
        icon: "❤️",
        title: "Индивидуальный подход",
        description: "Учитываем ваши пожелания и медицинские особенности.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        О стоматологии Dexi
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
                        Мы объединили опытных врачей, комфортную атмосферу и новейшее оборудование,
                        чтобы каждая ваша встреча с нами была приятной и результативной.
                    </p>
                </div>
                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`flex flex-col h-full min-h-[220px] rounded-2xl border border-gray-100 bg-white p-6 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-200 transition-all duration-300 text-center animate-fade-in-up delay-${(index + 1) * 100}`}                        >
                            <div className="flex items-center gap-1">
                                <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                                <h3 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="mt-2 text-gray-600 flex-0 text-left">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}