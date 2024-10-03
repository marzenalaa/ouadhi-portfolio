import {
  About,
  Contact,
  Experiences,
  Footer,
  Hero,
  Services,
  FloatingNav,
} from "@/components";
import { navItems } from "@/data";
import styles from "@/style";

const HomePage = () => {
  return (
    <main
      className={`relative ${styles.flexCenter} flex-col overflow-hidden bg-black-100 mx-auto sm:px-10 px-5 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experiences />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
