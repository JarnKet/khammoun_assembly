import Image from "next/image";
const Loading = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen gap-4">
      <div className="relative w-40 h-40">
        <Image
          src={`/images/logo.png`}
          alt="logo"
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>
      <span className="loading loading-ring loading-lg"></span>
      <h1>ກຳໂຫຼດຂໍ້ມູນ</h1>
      <div class="bg-gradient-to-b from-neutral to-base-100 absolute inset-0 -z-10 opacity-80" />
    </div>
  );
};

export default Loading;
