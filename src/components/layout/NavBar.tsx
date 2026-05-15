import Image from "next/image";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Логотип */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Стоматология Dexi"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-xl object-cover"
                        priority
                    />
                    <span className="text-2xl font-bold tracking-tight text-sky-700">Dexi</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-gray-600 hover:text-sky-700 text-xl font-900 transition-colors">
                        Услуги
                    </a>
                    <a href="#reviews" className="text-gray-600 hover:text-sky-700 text-xl font-900 transition-colors">
                        Отзывы
                    </a>
                    <a href="#doctors" className="text-gray-600 hover:text-sky-700 text-xl font-900 transition-colors">
                        Врачи
                    </a>
                    <a href="#about" className="text-gray-600 hover:text-sky-700 text-xl font-900 transition-colors">
                        О нас
                    </a>
                </nav>

                <a
                    href="#contacts"
                    className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-sky-700"
                >
                    Записаться
                </a>
            </div>
        </header>
    );
}