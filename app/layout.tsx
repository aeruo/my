import { Karla } from 'next/font/google'
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

import Sidebar from '@/components/Sidebar'
import Logo from '@/components/Logo'
import ContactBtn from '@/components/ContactBtn'
import Subscribe from '@/components/Subscribe'
import Ad from '@/components/Ad'

const karla = Karla({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={karla.className}>
      <body className="bg-background text-foreground">
        <main className="h-screen">
          <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full h-full">
              <div className="row-span-5 p-2 flex flex-col justify-between items-end h-full border-r">
                <Logo/>
                <Sidebar/>
                <ContactBtn/>
              </div>
              <div className="col-span-2 row-span-5 py-2 min-h-full overflow-y-scroll">      
                {children}
              </div>
              <div className="row-span-5 col-start-4 p-4 flex flex-col justify-end items-center">
                <Ad/>
                <Subscribe/>
              </div>
          </div>
        </main>
      </body>
    </html>
  );
}
