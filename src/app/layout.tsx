import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黃詩婷 - 高雄房地產財富顧問 預約系統",
  description: "黃詩婷的電子名片、線上預約與預約管理後台",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
