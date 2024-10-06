import styles from "@/style";
import { socialMedia } from "@/data";
import Link from "next/link";
import SocialMediaCard from "./cards/SocialMediaCard";
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
            <SocialMediaCard key={social.id} {...social} />
          ))}
        </div>
        <p>Copyright &copy;2024 OUADHI Mohammed</p>
        <p>
          Devlopped by{" "}
          <Link
            href="https://www.linkedin.com/in/marzen-alaaeddine/"
            target="_blank"
            className="text-purple font-semibold"
          >
            AlaaEddin MARZEN
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
