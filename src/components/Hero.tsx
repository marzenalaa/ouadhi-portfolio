import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import styles from "@/style";
import Link from "next/link";

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
        className={`${styles.flexCenter} absolute top-0 left-0 h-screen w-full bg-black-100 bg-grid-small-white/[0.15]`}
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
            Building Full-Stack Solutions from the Ground Up
          </h3>
          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl"
            words="Delivering Robust and Scalable Web Applications."
          />
          <p className="mt-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Mohammed, a Full Stack Engineer with a strong
            foundation in Java, Spring, and React. I specialize in building
            scalable and efficient web applications using modern technologies
            and best practices.
          </p>
          <Link href="#services" className="mt-4">
            <MagicButton
              title="Show my services"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
