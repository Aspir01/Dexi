export default function Footer() {
    return (
        <footer className="border-t bg-gray-50 py-8 text-center text-sm text-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} Стоматология Dexi. Все права защищены.
            </div>
        </footer>
    );
}