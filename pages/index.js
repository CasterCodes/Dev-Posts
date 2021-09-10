import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const Home = ({ posts: propsPosts }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPosts(propsPosts);
  }, []);

  const categories = [...new Set(propsPosts.map((post) => post.data.category))];

  const filterPosts = (category) => {
    const filteredPosts = propsPosts.filter(
      (post) => post.data.category === category
    );

    setPosts(filteredPosts);
  };

  const searchPosts = (e) => {
    const regex = new RegExp(`${searchTerm}`, "gi");

    const searchedPosts = propsPosts.filter(
      (post) =>
        post.slug.match(regex) ||
        post.data.title.match(regex) ||
        post.data.excerpt.match(regex)
    );

    setPosts(searchedPosts);
  };

  return (
    <div className="container">
      <div className="posts_Header">
        <div className="posts_HeaderLeft">
          <h1>Posts</h1>
        </div>
        <div className="posts_HeaderRight">
          <form>
            <input
              placeholder="Search for posts"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                searchPosts();
              }}
            />
          </form>
        </div>
      </div>
      <div className="posts_Section">
        <div className="posts">
          {posts.map((post, index) => (
            <div className="post_Item" key={index}>
              <h2>{post.data.title}</h2>
              <p>{post.data.excerpt}</p>
              <p className="time">{post.data.createdAt}</p>
              <Link href={`/blog/${post.slug}`}>
                <a>Read More</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="posts_Left">
          <h3>Blog Categories</h3>
          <div>
            {categories.map((category, index) => (
              <p onClick={() => filterPosts(category)} key={index}>
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const unsortedPosts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      data,
    };
  });

  const posts = unsortedPosts.sort(
    (a, b) => new Date(b.data.createdAt) - new Date(a.data.createdAt)
  );

  return {
    props: { posts },
  };
}

export default Home;
