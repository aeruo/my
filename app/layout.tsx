import { Karla } from 'next/font/google'
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "aeruo (Emmanuel A.) | Software developer",
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
          <div className="md:grid grid-cols-4 grid-rows-5 gap-4 w-full h-full">
              <div className="md:relative md:row-span-5 p-2 flex md:flex-col justify-between items-end md:h-full md:w-auto w-full border-r bg-white md:bg-transparent fixed bottom-0">
                <Logo/>
                <Sidebar/>
              </div>
              <div className="col-span-2 row-span-5 py-2 min-h-full overflow-y-scroll md:p-0 p-4">      
                {children}
              </div>
              <div className="row-span-5 col-start-4 p-4 flex flex-col justify-end items-center pb-24 md:pb-4">
                <Ad/>
                <Subscribe/>
              </div>
          </div>
        </main>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
