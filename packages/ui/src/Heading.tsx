export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-20 flex  items-center px-3  ">
      <div className="lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl max-sm:font-normal md:font-bold text-purple-600 ">
        {title}
      </div>
    </div>
  );
};
