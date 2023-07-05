import { getPostDetail } from "@/services";

const Page = async ({ params }) => {
  const postDetail = await getPostDetail(params.slug);

  return (
    <article className="flex flex-col justify-center w-full px-10  lg:px-20 gap-y-6 bg-base-200 ">
      <h1 className="mt-4 text-lg font-bold leading-normal lg:text-center lg:text-4xl">
        {postDetail.title}
      </h1>
      <img
        src={postDetail.featuredImage.url}
        alt={postDetail.title}
        className="w-full h-full rounded-2xl"
      />
      <div
        className="postDetail"
        dangerouslySetInnerHTML={{ __html: postDetail.content.html }}
      />
    </article>
  );
};
export default Page;
