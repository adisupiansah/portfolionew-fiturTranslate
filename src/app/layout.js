import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguangeProvider } from "@/context/TranslateContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "portfolio",
  description: "Adi supiansah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguangeProvider>
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </LanguangeProvider>
    </html>
  );
}
