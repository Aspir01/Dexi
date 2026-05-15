import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Стоматология Dexi в Махачкале – лечение зубов, имплантация, протезирование",
  description:
    "Современная стоматология Dexi в Махачкале: безболезненное лечение, имплантация, протезирование, отбеливание. Опытные врачи, новейшее оборудование. Запишитесь на приём онлайн!",
  keywords: [
    "стоматология махачкала",
    "стоматология dexi",
    "dexi махачкала",
    "лечение зубов махачкала",
    "имплантация махачкала",
    "стоматологическая клиника махачкала",
    "отбеливание зубов махачкала",
    "стоматолог махачкала",
    "dexi dental",
  ],
  authors: [{ name: "Стоматология Dexi" }],
  creator: "Dexi Dental Clinic",
  publisher: "Dexi Dental Clinic",
  metadataBase: new URL("https://dexi-dent.ru"), // замените на реальный домен
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://dexi-dent.ru",
    siteName: "Стоматология Dexi Махачкала",
    title: "Стоматология Dexi в Махачкале – здоровье вашей улыбки",
    description:
      "Современная стоматология Dexi: лечение, имплантация, протезирование. Запись онлайн.",
    images: [
      {
        url: "/og-image.png", // можно создать красивую картинку для соцсетей
        width: 1200,
        height: 630,
        alt: "Стоматология Dexi Махачкала",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png", // логотип в формате PNG, лежит в public/logo.png
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        {/* Дополнительно: микроразметка для локального бизнеса */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Стоматология Dexi",
              description:
                "Современная стоматологическая клиника в Махачкале. Лечение, имплантация, протезирование.",
              url: "",
              telephone: "+79882204448",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Бейбулатова, 12",
                addressLocality: "Махачкала",
                addressRegion: "Республика Дагестан",
                postalCode: "367000",
                addressCountry: "RU",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "19:00",
              },
              image: "public\logo.png",
              priceRange: "₽₽",
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}