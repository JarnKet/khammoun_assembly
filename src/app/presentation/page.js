import { Banner } from "@/components";
import { presentationTxt } from "@/constants/presentationTxt";

export const metadata = {
  title: "ພາກສະເໜີ",
};

const Page = () => {
  return (
    <>
      <Banner text={"ພາກສະເໜີ"} />

      {presentationTxt?.map((item, index) => (
        <section key={index} className="w-full lg:px-10 hero bg-base-200">
          <div
            className={`flex-col lg:gap-x-10 hero-content ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } `}
          >
            <img
              alt={item.title}
              src={item.img}
              className="rounded-lg shadow-2xl lg:max-w-sm"
            />
            <div>
              <h1 className="mt-2 text-5xl font-bold lg:mt-0 ">{item.title}</h1>
              {item.description.map((text, index) => (
                <p key={index} className="py-3 text-neutral-focus">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Page;
