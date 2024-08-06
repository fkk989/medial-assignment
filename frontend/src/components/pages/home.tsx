import { PostCard } from "../cards";
import { posts } from "../../utils/posts";
import { useNavigate } from "react-router-dom";
import { usePageSeo } from "../../hooks/usePageSeo";
import homeImage from "../../assets/home.png";

export const Home = () => {
  const navigate = useNavigate();
  usePageSeo({
    title: "Posts",
    description: "this is simple post websites",
    keywords: [],
    ogImageUrl: homeImage,
  });
  return (
    <div className="flex flex-wrap justify-evenly p-[40px] gap-x-[50px] gap-y-[30px]">
      {posts.map(({ id, title, content, image }, index) => {
        return (
          <PostCard
            onClick={() => {
              navigate(`/post/${id}`);
            }}
            key={index}
            title={title}
            content={content}
            imageUrl={image}
          />
        );
      })}
    </div>
  );
};
