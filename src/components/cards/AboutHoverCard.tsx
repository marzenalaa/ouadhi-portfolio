interface AboutHoverCardProps {
  id: string;
  title: string;
  desc: string;
}
const AboutHoverCard = ({ id, title, desc }: AboutHoverCardProps) => {
  return (
    <div className="flex gap-4 my-1">
      <h5 className="w-24 text-violet-200">{title}:</h5>
      <p>{desc}</p>
    </div>
  );
};

export default AboutHoverCard;
