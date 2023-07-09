import { getPostDetail } from "@/services";
import { Banner } from "@/components";

const Page = async ({ params }) => {
  const postDetail = await getPostDetail(params.slug);

  return (
    <>
      <Banner
        text={postDetail.title}
        img={postDetail.featuredImage.url}
        txtStyle="text-neutral-focus"
      />
      <article className="flex flex-col items-center justify-center w-full p-10 lg:p-20 gap-y-6 bg-base-200 ">
        <img
          src={postDetail.featuredImage.url}
          alt={postDetail.title}
          className="w-full h-full rounded-2xl"
        />
        <h1 className="mt-4 text-lg font-bold leading-normal lg:text-center lg:text-4xl">
          {postDetail.title}
        </h1>
        <div
          className="max-w-4xl postDetail"
          dangerouslySetInnerHTML={{ __html: postDetail.content.html }}
        />
      </article>
    </>
  );
};
export default Page;
