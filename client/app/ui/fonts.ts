import { Playfair_Display, Geist, Geist_Mono, Inter } from 'next/font/google'

export const playfair = Playfair_Display({ subsets: ['latin'] })
export const inter = Inter({ subsets: ['latin'] });

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});