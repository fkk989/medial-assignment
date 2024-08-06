import React from "react";
import { useParams } from "react-router-dom";
import { usePageSeo } from "../../hooks/usePageSeo";
import { posts } from "../../utils/posts";

export const Post = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId!));
  if (!post) return <div></div>;
  //
  //custom hook to add og and twitter meta tags
  usePageSeo({
    title: post.title,
    description: post.content,
    keywords: [],
    ogImageUrl: `http://localhost:3000/og-img/${postId}`,
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-y-[20px]">
      <h1 className="text-center text-[30px]">
        This image is returned from server and will be add to the og meta tag
      </h1>
      <img src={`http://localhost:3000/og-img/${postId}`} />
    </div>
  );
};
