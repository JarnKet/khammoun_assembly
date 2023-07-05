import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative min-h-screen hero ">
      <div className="text-center hero-content">
        <div className="max-w-md text-base-100">
          <h1 className="text-5xl font-bold leading-[60px]">
            ສະພາປະຊາຊົນ <br />
            ແຂວງຄຳມ່ວນ
          </h1>
          <p className="py-6 ">
            ສະພາ ແມ່ນ ອົງການຕົວແທນແຫ່ງສິດ ແລະ ຜົນປະໂຫຍດຂອງປະຊາຊົນລາວ ບັນດາເຜົ່າ,
            ເປັນອົງການສູງສຸດແຫ່ງອຳນາດລັດ ແລະ ເປັນອົງການນິຕິບັນຍັດ.
          </p>
          <button className="btn btn-neutral">
            <Link href={`presentation`}>ຂໍ້ມູນກ່ຽວກັບສະພາ</Link>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={"images/location.jpg"}
          unoptimized
          alt="hero background"
          fill
          objectFit="cover"
        />
      </div>
      <div class="bg-gradient-to-t from-neutral to-base-100 absolute inset-0 -z-10 opacity-80" />
    </main>
  );
};

export default Hero;
