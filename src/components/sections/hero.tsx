import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-sky-50 to-white py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Текст */}
                    <div className="lg:pl-10 animate-fade-in-up">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Здоровая улыбка{" "}
                            <span className="text-sky-600">начинается здесь</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                            Современная стоматология Dexi – забота о ваших зубах с применением передовых технологий и индивидуальным подходом.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contacts"
                                className="w-full sm:flex-1 inline-flex items-center justify-center rounded-lg bg-sky-600 px-8 py-4 font-semibold text-white shadow-lg hover:bg-sky-700 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                            >
                                Записаться на приём
                            </a>
                            <a
                                href="#about"
                                className="w-full sm:flex-1 inline-flex items-center justify-center rounded-lg border-2 border-sky-300 px-8 py-4 font-semibold text-sky-700 bg-white hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:scale-[1.02] active:scale-95 shadow-md transition-all duration-300"
                            >
                                Подробнее
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:justify-center animate-fade-in-up delay-200">
                        <div className="h-80 w-80 rounded-3xl overflow-hidden shadow-2xl hover:rotate-3 hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/smile.jpg"
                                alt="Счастливая улыбка пациента"
                                width={320}
                                height={320}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}