import "./globals.css";
import { Inter, Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "200", "600"],
});

export const metadata = {
  title: "KingExpert",
  description: "Pelatihan ekslusif capai prestasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className} bg-mainBackground`}>
        {children}
      </body>
    </html>
  );
}
