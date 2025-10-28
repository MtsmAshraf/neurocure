import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import icon from "../../../public/images/logo.png"
import icon from "./favicon.ico"
// import Script from "next/script";
import { El_Messiri, Montserrat } from "next/font/google";
import Contact from "@/components/Contact/Contact";
// import FloatingContact from "@/components/FloatingContact/FloatingContact";
// import FloatingBooking from "@/components/FloatingBooking/FloatingBooking";
// import Prices from "@/components/Prices/Prices";



export const metadata: Metadata = {
  title: "NeuroCure | Dr. Mohammed Yacob",
  description: "As a neurologist, I work with patients who suffer from conditions affecting the brain, spinal cord, nerves, and muscles. Many neurological problems begin with subtle signs such as numbness, headache, or persistent fatigue. My approach focuses on listening carefully, identifying the underlying neurological cause, and guiding each patient toward a clear diagnosis and effective treatment plan.",
  icons: icon.src,
  keywords: [
    
  ],
  
};


  const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "400","700"], 
  });
  const elMessiri = El_Messiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    style: ["normal",],
  })

  
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;

}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={locale === "ar" ? elMessiri.className : montserrat.className}>
      <body>
        <NextIntlClientProvider>
          <Header lo={locale}></Header>
          {children}
          {/* <Prices /> */}
          {/* <FloatingBooking />
          <FloatingContact /> */}
          <Contact lo={locale}  />
          <Footer lo={locale}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
