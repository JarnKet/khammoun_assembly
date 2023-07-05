import Image from "next/image";
const Banner = ({ text }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[250px] border-red-500">
      <h1 className="bannerTitle">{text}</h1>

      <Image
        className="absolute inset-0 z-[-1]"
        src="images/location.jpg"
        alt="banner"
        fill
        objectFit="cover"
        unoptimized
        objectPosition="center"
      />
      <div class="bg-gradient-to-l from-neutral to-base-100 absolute inset-0  z-[-1] opacity-70" />
    </div>
  );
};

export default Banner;
