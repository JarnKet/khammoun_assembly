"use client";
import { useState, useEffect } from "react";
import { getPosts, getPostDetails } from "@/services";

const Page = ({ params }) => {
  const [postDetail, setPostDetail] = useState({});
  const { slug } = params;

  useEffect(() => {
    async function fetchPostDetail() {
      const res = await getPostDetails(slug);
      setPostDetail(res);
      if (res && res.title) {
        document.title = res.title; // Set the page title dynamically
      }
    }
    fetchPostDetail();
  }, []);

  return (
    <article className="flex flex-col justify-center w-full px-10 gap-y-6 bg-base-200 ">
      <h1 className="mt-4 text-lg font-bold leading-normal lg:text-center lg:text-4xl">
        {postDetail?.title}
      </h1>
      <img
        src={postDetail.featuredImage?.url}
        alt={postDetail?.title}
        className="w-full h-full rounded-2xl"
      />
      <div
        className="postDetail"
        dangerouslySetInnerHTML={{ __html: postDetail.content?.html }}
      />
    </article>
  );
};
export default Page;
