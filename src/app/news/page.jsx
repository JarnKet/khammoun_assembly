"use client";
import { Banner } from "@/components";
import { getPosts } from "@/services";
import { useState, useEffect } from "react";
import Link from "next/link";

export const metadata = {
  title: "ຂ່າວສານທັງໝົດ",
};
const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await getPosts();
      setPosts(res);
      console.log(posts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Banner text={"ຂ່າວສານທັງໝົດ"} />

      <section className="w-full py-6 lg:px-10">
        <div className="container grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 justify-items-center">
          {posts?.map((post) => (
            <div className="card w-80 lg:w-96 glass" key={post.id}>
              <figure className="border h-[50%] ">
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  className="object-cover w-full h-full "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.date}</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-neutral">
                    <Link href={`news/${post.slug}`}>ອ່ານຕໍ່</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
