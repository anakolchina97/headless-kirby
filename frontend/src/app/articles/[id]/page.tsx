import Post from "@/components/Post";
import React from "react";
import { getData } from "@/lib/getData";

const article = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const url = `articles/${params.id}`;
  const pageReq = await getData({
    query: `page('${url}')`,
    select: {
      headline: true,
      text: true,
    },
  });

  const {
    result: { text, headline },
  } = pageReq;

  return <Post src="1" title={headline} text={text} />;
};

export default article;
