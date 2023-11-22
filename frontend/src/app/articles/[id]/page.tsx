import Post from "@/components/Post";
import React from "react";
import { getData } from "@/lib/getData";

const article = async ({ params }: { params: { id: string } }) => {
  const url = `articles/${params.id}`;
  const pageReq = await getData({
    query: `page('${url}')`,
    select: {
      headline: true,
      text: true,
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  const {
    result: { text, headline, image },
  } = pageReq;

  return <Post src={image.url} title={headline} text={text} />;
};

export default article;
