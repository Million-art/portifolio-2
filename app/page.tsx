import Hero from "@/components/Hero";
import  {Services}  from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Skills />
 
        <h1 className="flex flex-row justify-center text-3xl md:text-5xl font-bold mt-40">My Services</h1>
 
        <Services />
        {/* <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
