import Image from "next/image";

interface SocialMediaCardProps {
  link: string;
  img: string;
}
const SocialMediaCard = ({ link, img }: SocialMediaCardProps) => {
  return (
    <div className={`h-8 sm:h-10 w-8 sm:w-10 `}>
      <a href={link} target="_blank">
        <Image src={img} alt={img} />
      </a>
    </div>
  );
};

export default SocialMediaCard;
