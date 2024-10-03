interface TitleProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 mb-5 text-white sm:text-6xl text-4xl tracking-tight">
        {title}
      </h3>
      <p className="text-sm tracking-widest text-violet-200 font-[family-name:var(--font-geist-mono)]">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
