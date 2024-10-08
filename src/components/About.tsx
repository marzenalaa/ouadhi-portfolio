"use client";
import Heading from "./Heading";
import styles from "@/style";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa6";
import { HoverEffect } from "./ui/HoverEffect";
import { projects, about } from "@/data";
import AboutHoverCard from "./cards/AboutHoverCard";

const About = () => {
  return (
    <section className={`${styles.section} ${styles.boxWidth}`} id="about">
      <div>
        <Heading title="About Me" subtitle="Get to know me" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 sm:mt-16 mt-6">
          <div className={`${styles.flexCenter}`}>
            <img
              src="https://illustrations.popsy.co/purple/home-office.svg"
              alt="home-office"
              className="bg-white"
            />
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-purple text-xl mb-4">{about.title}</h5>
            <h3 className="my-4 sm:text-2xl text-xl">{about.subtitle}</h3>
            <p className="">{about.description}</p>
            <div className="my-6">
              {about.aboutInfo.map((item) => (
                <AboutHoverCard key={item.id} {...item} />
              ))}
            </div>
            <a href={about.link} target="_blank">
              <MagicButton
                title="Donwload CV"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className="max-w-full mx-auto sm:my-10 my-6">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default About;
