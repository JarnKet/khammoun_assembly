import Banner from "@/components/Banner";
import Image from "next/image";

export const metadata = {
  title: "ສະມາຊິກສະພາປະຊາຊົນແຂວງຄຳມ່ວນ ຊຸດທີ II",
};

const Page = () => {
  return (
    <>
      <Banner text={`ສະມາຊິກສະພາປະຊາຊົນແຂວງຄຳມ່ວນ ຊຸດທີ II`} />
      <section className="flex items-center justify-center lg:min-h-screen">
        <div className="relative w-[320px] h-[240px] lg:w-[1280px] lg:h-[720px]">
          <Image
            src={`/images/province_member.jpg`}
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
