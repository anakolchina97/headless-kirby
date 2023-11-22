import Hero from "@/components/Hero";
import axios from "axios";
import About from "@/components/About";
import Articles from "@/components/Articles";

async function getData() {
  try {
    const api = process.env.API_URL || "";
    const res = await axios.post(api, {
      query: "page('home')",
      select: {
        images: {
          query: "page.images",
          select: {
            url: true,
            type: true,
          },
        },
        about: {
          query: "page.about.toStructure",
          select: {
            title: true,
            text: true,
            btn: true,
          },
        },
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const {
    result: { images, about },
  } = await getData();

  return (
    <>
      <Hero images={images} />
      <About about={about} />
      <Articles />
    </>
  );
}
