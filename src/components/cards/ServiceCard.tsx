interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
}
const ServiceCard = ({ id, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative block h-56 sm:h-64 lg:h-96 cursor-pointer">
      <span className="absolute inset-0 border-2 border-dashed border-white" />
      <div className="relative flex h-full transform items-end border-2 border-white bg-black-100 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="w-24 h-24 bg-violet-300 rounded-full absolute -right-6 -top-8 opacity-50">
            <p className="absolute bottom-6 left-7 text-black-100 text-xl sm:text-2xl">
              {id}
            </p>
          </div>
          <h3 className="my-4 text-xl sm:text-2xl text-violet-300">{title}</h3>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
