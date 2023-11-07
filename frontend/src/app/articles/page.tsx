import axios from "axios";

async function getData() {
  try {
    const api = process.env.API_URL || "";
    const res = await axios.post(api, {
      query: "page('blog')",
      select: ["headline", "text", "file"],
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function About() {
  const {
    result: { headline, text, file },
  } = await getData();

  return <>articles</>;
}
