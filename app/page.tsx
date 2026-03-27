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
    <main className="relative min-h-screen bg-[#030712] flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        aria-hidden
      >
        <div className="absolute top-[-20%] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute top-1/3 left-[-15%] h-[20rem] w-[20rem] rounded-full bg-fuchsia-600/10 blur-[80px]" />
      </div>
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <About />
        <Skills />
        <h2 className="heading mt-32 md:mt-40 mb-2 text-zinc-100">
          Services
        </h2>
        <p className="text-center text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10">
          Full-stack delivery with a focus on reliable backends and AI-ready architectures.
        </p>
        <Services />
        <Portifolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
