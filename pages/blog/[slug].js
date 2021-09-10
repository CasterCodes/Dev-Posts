import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";

function SinglePost({ post }) {
  return (
    <div className="container">
      <Head>
        <title>{post.data.title}</title>
      </Head>
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const fileContent = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(fileContent);
  return {
    props: {
      post: {
        slug,
        data,
        content,
      },
    },
  };
}

export default SinglePost;
