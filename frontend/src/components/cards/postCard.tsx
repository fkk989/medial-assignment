import React from "react";

interface Prop {
  title: string;
  content: string;
  imageUrl: string;
  onClick?: () => void;
}

export const PostCard: React.FC<Prop> = (prop) => {
  return (
    <div
      onClick={prop.onClick}
      className="w-[400px] h-[500px] flex flex-col rounded-md  overflow-hidden cursor-pointer shadowww"
    >
      <div className="flex-1">
        <img
          src={prop.imageUrl}
          alt={prop.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">{prop.title}</h1>
        <p className="text-gray-600">{prop.content}</p>
      </div>
    </div>
  );
};
