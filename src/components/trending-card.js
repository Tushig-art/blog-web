const { default: Image } = require("next/image");

export const TrendingCard = (props) => {
  const { image, tag, title } = props;
  return (
    <article className="relative w-full overflow-hidden h-80 rounded-xl">
      <Image className="absolute object-cover w-full h-full" src={image} width={289} height={320} alt="" />
      <div className="relative gap-4 flex flex-col justify-end items-start w-full h-full bg-[#141624]/40 p-7">
        <div className="bg-[#4B6BFB] py-1 px-3 inline text-white text-xs rounded-md font-medium">{tag}</div>
        <div className="text-lg font-semibold text-white">{title}</div>
      </div>
    </article>
  );
};