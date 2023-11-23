import Post from "@/components/Post";
import React from "react";
import { getData } from "@/lib/getData";

const article = async ({ params }: { params: { id: string } }) => {
  console.log(params);
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
      blocks: {
        query: "page.blocks.toBlocks",
        select: {
          id: true,
          type: true,
          text: true,
          list: true,
        },
      },
    },
  });

  const {
    result: { text, headline, image, blocks },
  } = pageReq;

  return <Post src={image.url} title={headline} text={text} blocks={blocks} />;
};

export default article;
