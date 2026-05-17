const doctors = [
    {
        firstName: "Сурхай",
        lastName: "Абдулатипович",
        role: "Главный врач, стоматолог-хирург",
        img: "👨‍⚕️",
        exp: "Стаж 15 лет",
    },
    {
        firstName: "Ахмед",
        lastName: "Алиевич",
        role: "Стоматолог-терапевт",
        img: "👨‍⚕️",
        exp: "Стаж более 12 лет",
    },
    {
        firstName: "Магомед",
        lastName: "Магомедович",
        role: "Стоматолог-терапевт",
        img: "👨‍⚕️",
        exp: "Стаж более 3 лет",
    },
    {
        firstName: "Мумин",
        lastName: "Абдулмаликович",
        role: "Ортодонт",
        img: "👨‍⚕️",
        exp: "Стаж более 9 лет",
    },
    {
        firstName: "Сурхай",
        lastName: "Ахмедович",
        role: "Стоматолог",
        img: "👨‍⚕️",
        exp: "Стаж более 3 лет",
    },
    {
        firstName: "Фарида",
        lastName: "Эсмухамедова",
        role: "Стоматолог",
        img: "👩‍⚕️",
        exp: "Стаж более 3 лет",
    },
    {
        firstName: "Мансур",
        lastName: "Музарутинович",
        role: "Стоматолог",
        img: "👨‍⚕️",
        exp: "Стаж более 2 лет",
    },
];


export default function Doctors() {
    return (
        <section id="doctors" className="py-20 sm:py-28 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
                        Наши врачи
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Опытные специалисты, которым доверяют пациенты.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {doctors.map((doc, index) => (
                        <div
                            key={`${doc.firstName}-${doc.lastName}`}
                            className={`rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <div className="text-5xl">{doc.img}</div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">
                                <span className="block">{doc.firstName}</span>
                                <span className="block">{doc.lastName}</span>
                            </h3>
                            <p className="text-sky-600 font-medium">{doc.role}</p>
                            <p className="mt-2 text-sm text-gray-500">{doc.exp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}