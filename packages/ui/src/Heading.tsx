export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-20 flex  items-center px-3  ">
      <div className="lg:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl font-bold md:font-bold text-purple-600 ">
        {title}
      </div>
    </div>
  );
};
