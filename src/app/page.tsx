import Hero from "../components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";

const HomePage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden bg-black-100 mx-auto sm:px-10 px-5 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Resume />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
