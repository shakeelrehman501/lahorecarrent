import Navbar from "@/components/navbar/Navbar";
import { bricolage, poppins } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/service/Footer";
import { BsWhatsapp } from "react-icons/bs";
import AppLoader from "@/components/ui/AppLoader";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://lahorecarrent.com"),
  title: "Rent a Car Lahore | Best Car Rental Service in Lahore",
  description: "Affordable and reliable car rental services in Lahore. Rent luxury cars with driver at the best prices for weddings, travel and business.",
  icons: {
    icon: "/others/fav_icon.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
  siteName: "Lahore Car Rent",
  title: "Rent a Car in Lahore",
  description: "Affordable car rental services in Lahore",
  url: "https://lahorecarrent.com",
  type: "website",
  images: [
    {
      url: "/others/og-img.jpg",
      width: 1200,
      height: 1000,
    },
  ],
},
  other: {
    "google-site-verification": "XDZj6IxAk0oZOzE2lLVtNfhIX2li0sB_jWUHz8qZ23g",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Lahore Car Rent",
            alternateName: "Lahore Car Rental",
            url: "https://lahorecarrent.com",
          }),
        }}
      />
    </head>
      <body
        className={` flex flex-col  ${bricolage.variable} ${poppins.variable} `}
      >
        <AppLoader>
        <div className="w-full bg-blue-700">
        <Navbar />
        </div>
        <main>{children}</main>
        <a
          href="https://wa.me/923004611570"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="whatsapp-btn animate-whatsappPulse fixed bottom-7 right-7 lg:bottom-8 lg:right-8 z-50 rounded-full  shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] p-2.5 cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <BsWhatsapp className="w-10 h-10 text-white" />
          </button>
        </a>

        <Footer />
        <SpeedInsights/>
        </AppLoader>
      </body>
    </html>
  );
}
