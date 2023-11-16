import React from "react";

const article = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default article;
