"use client";
import Heading from "./Heading";
import styles from "@/style";
import { services } from "@/data";
import ServiceCard from "./cards/ServiceCard";

const Services = () => {
  return (
    <section className={`${styles.section} ${styles.boxWidth}`} id="services">
      <Heading title="Services" subtitle="Services i offer to my clients" />
      <div className="max-w-full mx-auto sm:my-10 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 text-white gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
