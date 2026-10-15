import "./globals.css";
import { Anton, Inter } from "next/font/google";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "BCAWale | Batch of Survivors",
  description:
    "IGNOU BCA students ka apna internet gang. Assignments, backlogs aur bhaichara, sab ek jagah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} grain antialiased`}
      >
        {children}
      </body>
    </html>
  );
}