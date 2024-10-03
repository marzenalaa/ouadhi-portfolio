import Heading from "./Heading";
import styles from "@/style";
import { Timeline } from "./ui/Timeline";
import { experiences } from "@/data";

const Experiences = () => {
  return (
    <section
      className={`${styles.section} ${styles.boxWidth}`}
      id="experiences"
    >
      <div>
        <Heading title="Experiences" subtitle="Everything about me!" />
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
