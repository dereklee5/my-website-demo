import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
// can also do import { Comic_Neue, Inter, Montserrat, Roboto } from 'next/font/google';
// const inter = Comic_Neue({ subsets: ['latin], weight: ["700"] })

export const metadata = {
  title: 'My Website',
  description: 'This is a website I made about Demi Lovato',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
