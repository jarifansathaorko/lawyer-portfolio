import type { Metadata, Viewport } from "next";
import { Noto_Serif_Bengali, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-bengali",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#01322C",
};

export const metadata: Metadata = {
  title: "অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ | এম.এস.এস, এলএল.বি (ঢা: বি:) | অ্যাডভোকেট, সুপ্রিম কোর্ট অব বাংলাদেশ",
  description:
    "অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ (এম.এস.এস, এলএল.বি, ঢাকা বিশ্ববিদ্যালয়) — ৩০+ বছরের অভিজ্ঞতাসম্পন্ন দেওয়ানি আইনজীবী। সম্পত্তি, ভূমি, উত্তরাধিকার, রিয়েল এস্টেট ও দেওয়ানি মামলা সংক্রান্ত আইনগত পরামর্শ ও আদালতে প্রতিনিধিত্ব।",
  keywords: [
    "দেওয়ানি আইনজীবী",
    "সম্পত্তি আইনজীবী",
    "জমি সংক্রান্ত আইনজীবী",
    "ভূমি বিরোধ",
    "উত্তরাধিকার আইনজীবী",
    "দেওয়ানি মামলা",
    "রিয়েল এস্টেট আইনজীবী",
    "Supreme Court Advocate Bangladesh",
    "Civil Lawyer Bangladesh",
    "Property Lawyer Bangladesh",
    "Advocate Mollah Md Ali Ashraf",
    "মোল্লা মোঃ আলী আশ্রাফ",
  ],
  authors: [{ name: "অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ" }],
  openGraph: {
    title: "অ্যাডভোকেট মোল্লা মোঃ আলী আশ্রাফ | সুপ্রিম কোর্ট অব বাংলাদেশ",
    description:
      "৩০+ বছরের অভিজ্ঞতাসম্পন্ন দেওয়ানি আইনজীবী (এম.এস.এস, এলএল.বি, ঢা: বি:)। সম্পত্তি, ভূমি, উত্তরাধিকার ও দেওয়ানি বিষয়ে আইনগত সহায়তা।",
    type: "website",
    locale: "bn_BD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} ${notoSansBengali.variable} w-full overflow-x-hidden`}
    >
      <body className="font-noto-sans-bengali antialiased text-charcoal bg-white w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
