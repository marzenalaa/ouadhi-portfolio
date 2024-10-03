import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { heroSection } from "@/data";
import styles from "@/style";

const Hero = () => {
  return (
    <section className="py-12" id="hero">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className={`${styles.flexCenter} absolute top-0 left-0 h-screen w-full bg-black-100 bg-grid-small-white/[0.22]`}
      >
        <div
          className={`${styles.flexCenter} absolute pointer-events-none inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}
        />
      </div>
      <div className="relative flex justify-center my-16 z-10">
        <div
          className={`${styles.flexCenter} text-center flex-col max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]`}
        >
          <h3 className="uppercase tracking-widest text-violet-200 max-w-xl">
            {heroSection.subtitel}
          </h3>
          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl"
            words={heroSection.title}
          />
          <p className="mt-4 text-sm md:text-lg lg:text-2xl">
            {heroSection.description}
          </p>
          <a href="#services" className="mt-4">
            <MagicButton
              title={heroSection.buttonTitle}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
