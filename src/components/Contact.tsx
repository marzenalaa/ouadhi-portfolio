import styles from "@/style";
import React from "react";
import Heading from "./Heading";
import ContactImg from "../../public/contact.png";
import Image from "next/image";
import { contact } from "@/data";

const Contact = () => {
  return (
    <section className={`${styles.section} ${styles.boxWidth}`} id="contact">
      <div>
        <Heading
          title="Get in Touch"
          subtitle="Feel free to contact me anytimes"
        />
        <div className={`flex gap-4 lg:flex-row flex-col my-8`}>
          <div className="relative lg:w-1/2 lg:p-4 flex justify-center flex-col">
            <p className="text-lg sm:text-xl">{contact.text}</p>
            <div>
              {contact.contactInfo.map((item) => (
                <div
                  className="bg-white flex items-center gap-4 sm:gap-8 p-3 my-8 rounded-md"
                  key={item.id}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="h-6 md:h-8 w-6 md:w-8 md:m-4"
                  />

                  <div>
                    <p className="font-bold text-lg text-violet-500">
                      {item.title}
                    </p>
                    <p className="text-black-100/95">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:p-4">
            <Image src={ContactImg} alt="contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
