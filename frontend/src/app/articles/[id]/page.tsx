import Post from "@/components/Post";
import React from "react";

const article = ({ params }: { params: { id: string } }) => {
  return <Post src="1" title="Relationship" text="Relationship. Description" />;
};

export default article;
