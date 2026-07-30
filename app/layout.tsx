import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mainframe® — Adaptive Response Interface Agent",
  description: "Mainframe is a creative agency. Meet A.R.I.A, Mainframe's Adaptive Response Interface Agent.",
  openGraph: {
    title: "Mainframe® — Adaptive Response Interface Agent",
    description: "Mainframe is a creative agency. Meet A.R.I.A, Mainframe's Adaptive Response Interface Agent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-black bg-white overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
