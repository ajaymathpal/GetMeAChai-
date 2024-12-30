import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me A Chai - Fund your projects with Chai",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[80.8vh]  bg-[#000000] text-white bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          {/* <div className="min-h-screen  bg-[#000000] text-white bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"> */}
            {children}
          </div>
          <Footer />
        </SessionWrapper>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>


    </html>
  );
}


