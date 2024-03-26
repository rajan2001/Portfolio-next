import NavBar from "@/components/navbar";

const Navlink: string[] = ["Blog", "Graphic", "Project", "About"];

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <NavBar Navlink={Navlink} />
          <header className="relative mx-[10vw]">
            <div className="grid relative grid-cols-4 lg:grid-cols-12 md:grid-cols-8 lg:gap-x-6 gap-x-4 mx-auto max-w-7xl h-auto lg:pt-24 lg:pb-12 lg:min-h-[40rem]">
              {children}
            </div>
          </header>
        </body>
      </html>
    </>
  );
}
