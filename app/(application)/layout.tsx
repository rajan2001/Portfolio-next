import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import { Navlink } from "@/config";


export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body className="mx-[10vw]">
          <NavBar Navlink={Navlink} />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
