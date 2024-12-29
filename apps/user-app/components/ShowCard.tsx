import Image from "next/image";
export interface showCardProps {
  image: string;
  title: string;
  description: string;
}
export const ShowCard = ({ image, title, description }: showCardProps) => {
  return (
    <div className="flex   hover:scale-95 p-1 bg-white flex-col gap-3">
      <Image className="h-56 border  rounded-sm w-full " src={image} alt="" />
      <div className="px-3  mb-3">
        <h2 className="text-[23px] font-[600] font-helvitika">{title}</h2>
        <div className="py-2 text-slate-600">{description}</div>
      </div>
      <div className="sr-only hover:not-s">See directory</div>
    </div>
  );
};
