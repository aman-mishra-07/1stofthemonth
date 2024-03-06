import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "1stofthemonth",
  description: "Regular Checkup regarding website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <div className="md:mr-28 ">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
