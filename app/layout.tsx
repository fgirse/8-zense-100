import AuthProvider from "@/components/AuthProvider"
import "./globals.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts"
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import  Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "8-zense.com",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-slate-900 to--900" />
        <Suspense fallback="...">
          <Navbar session={null} />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
           <Footer />
        <Analytics />
      </body>
      </AuthProvider>
    </html>
  );
}
