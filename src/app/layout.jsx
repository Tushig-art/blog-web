import { Blogs } from "@/components/blogs";
import "./globals.css";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: ".:: Meta blog ::.",
  description: "Generated by create next app",
  openGraph: {
    image: "https://images3.alphacoders.com/132/1328547.png",
  },
};

const workSans = Work_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${workSans.className}`}>
        <Header />
        {children}
        <Footer />
        <Blogs/>
        <BlogCard/>
      </body>
    </html>
  );
}