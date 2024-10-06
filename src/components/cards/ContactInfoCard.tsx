import Image from "next/image";

interface ContactInfoCardProps {
  img: string;
  title: string;
  desc: string;
}
const ContactInfoCard = ({ img, title, desc }: ContactInfoCardProps) => {
  return (
    <div className="bg-white flex items-center gap-4 sm:gap-8 p-3 my-8 rounded-md">
      <Image src={img} alt={title} className="h-6 md:h-8 w-6 md:w-8 md:m-4" />
      <div>
        <p className="font-bold text-lg text-violet-500">{title}</p>
        <p className="text-black-100/95">{desc}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
