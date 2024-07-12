import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portifolio from "@/components/Portifolio";
import  {Services}  from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <About />
        <Skills />
        <h1 className="flex flex-row justify-center text-3xl md:text-5xl font-bold mt-40">My Services</h1>
        <Services />
        <Portifolio />
        <Contact />
        <Footer />
        
      </div>
    </main>
  );
}
