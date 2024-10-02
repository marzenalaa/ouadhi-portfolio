"use client";
import React from "react";
import Heading from "./Heading";
import styles from "@/style";
import { services } from "@/data";

const Services = () => {
  return (
    <section className={`${styles.section} ${styles.boxWidth}`} id="services">
      <Heading title="Services" subtitle="Services i offer to my clients" />
      <div className="max-w-full mx-auto sm:my-10 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 text-white gap-10">
          {services.map((service) => (
            <div
              className="group relative block h-56 sm:h-64 lg:h-96 cursor-pointer"
              key={service.id}
            >
              <span className="absolute inset-0 border-2 border-dashed border-white" />

              <div className="relative flex h-full transform items-end border-2 border-white bg-black-100 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="w-24 h-24 bg-violet-300 rounded-full absolute -right-6 -top-8 opacity-50">
                    <p className="absolute bottom-6 left-7 text-black-100 text-xl sm:text-2xl">
                      {service.id}
                    </p>
                  </div>

                  <h3 className="my-4 text-xl sm:text-2xl text-violet-300">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
