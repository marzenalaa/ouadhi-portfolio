import React from "react";
import Heading from "./Heading";
import styles from "@/style";
import { Timeline } from "./ui/Timeline";
import { experiences } from "@/data";

const Resume = () => {
  return (
    <section className={`${styles.section} ${styles.boxWidth}`} id="resume">
      <div>
        <Heading title="Resume" subtitle="Everything about me!" />
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Resume;
