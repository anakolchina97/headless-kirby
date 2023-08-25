import Grid from "@/components/Grid";
import axios from "axios";
import React from "react";

async function getData() {
  try {
    const api = process.env.API_URL || "";
    const res = await axios.post(api, {
      query: "page('about')",
      select: ["headline", "text"],
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function About() {
  const {
    result: { headline, text },
  } = await getData();

  return <Grid headline={headline} text={text} />;
}
