const reviews = [
    {
        name: "Аслан Ш.",
        text: "Лучшая стоматология! Вылечили сложный кариес, всё абсолютно безболезненно. Врач Сурхай Абдулатипов профессионал с большой буквы.",
        rating: 5,
    },
    {
        name: "Альбина Ф.",
        text: "Самая лучшая клиника стоматологии ! Каждому клиенту свой подход. Хорошие и приятные врачи , и очень качественная работа. Если лечить зубы , то только у них в клинике 100% Стоматологи этой клиники , вы просто огонь !😂",
        rating: 5,
    },
    {
        name: "Карим А.",
        text: "Хорошая стоматология. Рекомендую",
        rating: 5,
    },
    {
        name: "Хирав С.",
        text: "Очень хорошая клиника 👍🏿👍🏿👍🏿 рекомендую",
        rating: 5,
    },
    {
        name: "Марзигет М.",
        text: "Очень грамотный врач, у сына была шишка на челюсти он подобрал правильный метод лечения и Алх|ямдулиллагь вылечил! Всем советую!",
        rating: 5,
    },
    {
        name: "Зухра А.",
        text: "Зуб лечил Магомед Магомедович, вежливый и хороший стоматолог.",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-20 sm:py-28 bg-gradient-to-br from-sky-50 to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
                        Что говорят наши пациенты
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Более 1000 довольных улыбок каждый год.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`flex flex-col h-full min-h-[280px] rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-sky-200 transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <p className="text-xl font-semibold text-gray-900 mb-3">
                                {review.name}
                            </p>

                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>

                            {/* Текст отзыва */}
                            <p className="text-gray-600 flex-1 leading-relaxed">
                                «{review.text}»
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}