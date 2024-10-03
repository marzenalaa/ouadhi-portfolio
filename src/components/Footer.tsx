import Image from "next/image";
import styles from "@/style";
import { socialMedia } from "@/data";
const Footer = () => {
  return (
    <section
      className={`${styles.section} ${styles.boxWidth} border-t border-white`}
    >
      <div
        className={`${styles.flexCenter} text-center sm:justify-between gap-6 my-8 flex-wrap`}
      >
        <div className={`${styles.flexCenter} gap-6`}>
          {socialMedia.map((social) => (
            <div key={social.id} className={`h-8 sm:h-10 w-8 sm:w-10 `}>
              <a href={social.link} target="_blank">
                <Image src={social.img} alt={social.img} />
              </a>
            </div>
          ))}
        </div>

        <p>Copyright &copy;2024 OUADHI Mohammed</p>
        <p>
          Devlopped by{" "}
          <a
            href="https://www.linkedin.com/in/marzen-alaaeddine/"
            target="_blank"
            className="text-purple font-semibold"
          >
            AlaaEddin MARZEN
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
