import styles from "@/style";
import Heading from "./Heading";
import ContactImg from "../../public/contact.png";
import Image from "next/image";
import { contact } from "@/data";
import ContactInfoCard from "./cards/ContactInfoCard";

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
                <ContactInfoCard key={item.id} {...item} />
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
