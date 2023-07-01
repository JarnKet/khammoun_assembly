import { Banner } from "@/components";

import Image from "next/image";

export const metadata = {
  title: "ສາຍຕິດຕໍ່",
};

const Page = () => {
  return (
    <>
      <Banner text={`ສາຍຕິດຕໍ່`} />
      <section className="flex items-center justify-center w-full px-10 my-10 ">
        <div className="flex flex-col items-center justify-center max-w-md gap-y-4">
          <Image
            src={"images/contact.svg"}
            alt="contact"
            width={300}
            height={300}
          />
          <p>
            ທ່ານສາມາດສົ່ງຄວາມຄິດເຫັນ ແລະ ຄຳຮຽກຮ້ອງຕໍ່ສະພາໄດ້
            ເພື່ອຈະນຳໄປປັບປຸງການເຮັດວຽກເພື່ອຮັບໃຊ້ປະຊາຊົນໃຫ້ມີປະສິດທິພາບທີ່ດີຂຶ້ນ.
          </p>
          <button className="btn btn-neutral">ຕອບແບບສອບຖາມ</button>
        </div>
      </section>
    </>
  );
};

export default Page;
