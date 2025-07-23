import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vin's Portofolio",
  description: "Hi, I'm Sinamo Kevin Nathanael — a passionate web developer offering custom app & website solutions. Check out my projects, certifications, and services.",
  icons: {
    icon: '/VinLogo.ico'
  },
  openGraph: {
    title: "Sinamo Kevin N Portofolio",
    description: "Hi, I'm Sinamo Kevin Nathanael — a passionate web developer offering custom app & website solutions. Check out my projects, certifications, and services.",
    images: [
      {
        url: 'https://example.com/Vin Logo.png',
        width: 500,
        height: 500
      }
    ],
    type: 'website',
    locale: 'id_ID'
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>

      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>

  );
}
