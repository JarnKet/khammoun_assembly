import Banner from "@/components/Banner";
import Link from "next/link";

import Image from "next/image";

const commentLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeeiZVtwPnA989smTyCxCt4B3BuAKZccPwgxUVqmX-hEwvcQg/viewform?pli=1";

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
            src={"/images/contact.svg"}
            alt="contact"
            width={300}
            height={300}
          />
          <p>
            ທ່ານສາມາດສົ່ງຄວາມຄິດເຫັນ ແລະ ຄຳຮຽກຮ້ອງຕໍ່ສະພາໄດ້
            ເພື່ອຈະນຳໄປປັບປຸງການເຮັດວຽກເພື່ອຮັບໃຊ້ປະຊາຊົນໃຫ້ມີປະສິດທິພາບທີ່ດີຂຶ້ນ.
          </p>
          <Link href={commentLink} target="_blank" className="btn btn-neutral">
            ຄຳຮ້ອງຮຽນ ແລະ ຄວາມຄິດເຫັນ
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
