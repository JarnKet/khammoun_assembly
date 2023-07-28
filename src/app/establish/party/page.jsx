import Banner from "@/components/Banner";
import Image from "next/image";

export const metadata = {
  title: "ການຈັດຕັ້ງຂອງສະພາປະຊາຊົນແຂວງຄຳມ່ວນ",
};

const Page = () => {
  return (
    <>
      <Banner text={`ການຈັດຕັ້ງຂອງສະພາປະຊາຊົນແຂວງຄຳມ່ວນ`} />
      <section className="flex flex-col items-center justify-center lg:min-h-screen">
        <div className="relative w-[320px] h-[240px] lg:w-[1000px] lg:h-[500px]">
          <Image
            src={`/images/Slide1.JPG`}
            alt="province member"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="relative w-[320px] h-[240px] lg:w-[1000px] lg:h-[500px]">
          <Image
            src={`/images/Slide2.JPG`}
            alt="province member"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="relative w-[320px] h-[240px] lg:w-[1000px] lg:h-[500px]">
          <Image
            src={`/images/Slide3.JPG`}
            alt="province member"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="relative w-[320px] h-[240px] lg:w-[1000px] lg:h-[500px]">
          <Image
            src={`/images/Slide4.JPG`}
            alt="province member"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="relative w-[320px] h-[240px] lg:w-[1000px] lg:h-[500px]">
          <Image
            src={`/images/Slide5.jpg`}
            alt="province member"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Page;
