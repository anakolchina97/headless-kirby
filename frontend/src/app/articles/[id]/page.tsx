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
      icon: {
        query: "page.icon.toFile",
        select: {
          url: true,
        },
      },
      photo: {
        query: "page.photo.toFile",
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
        },
      },
      texts: {
        query: "page.texts.toBlocks",
        select: {
          type: true,
          text: true,
        },
      },
    },
  });

  const {
    result: { text, headline, icon, photo, blocks, texts },
  } = pageReq;

  return (
    <Post
      icon={icon?.url}
      photo={photo?.url}
      title={headline}
      text={text}
      blocks={blocks}
      texts={texts}
    />
  );
};

export default article;
