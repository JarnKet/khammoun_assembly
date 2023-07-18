import Banner from "@/components/Banner";
import { members } from "@/constants/member";

export const metadata = {
  title: "ສະມາຊິກສະພາ",
};

const Page = () => {
  return (
    <section className="min-h-screen">
      <Banner text={`ສະມາຊິກສະພາ`} />

      <div className="grid w-full grid-cols-1 gap-10 my-6 justify-items-center lg:grid-cols-3">
        {members?.map((member, index) => (
          <div
            className="rounded-lg shadow-lg w-[250px] text-center p-4"
            key={index}
          >
            <img src={member.profileImg} alt={member.enName} />
            <h2 className="font-semibold text-neutral">{member.laName}</h2>
            <small>{member.enName}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
