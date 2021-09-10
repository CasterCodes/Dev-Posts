---
title: "Styling React with Tailwind CSS"
excerpt: "This tutorial shows you how to set up Tailwind in your React applications."
createdAt: "2020-05-05"
category: "React.js"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere ipsum ac quam molestie interdum. Donec scelerisque non mauris ut viverra. Pellentesque id vehicula mauris. Mauris ultrices pellentesque purus, at ullamcorper lacus viverra consequat. Ut ac libero dolor. Sed turpis sem, pharetra non malesuada sed, hendrerit sit amet dui. Vivamus vel tristique augue. Fusce sed ipsum id justo lobortis maximus. Donec commodo ante ut dui consequat, in dictum elit fringilla. Cras eget porta dolor, non mattis sem. In eget arcu eget metus molestie facilisis id in eros. Donec sed scelerisque augue. Nam dignissim risus vitae imperdiet suscipit. Quisque quis sapien fermentum, blandit nibh rhoncus, congue dui. Nullam porttitor magna et nisl congue, eu venenatis tellus pulvinar.

Nullam in nunc ut eros vestibulum tempor. Mauris ac pulvinar erat. Nam sem leo, commodo in bibendum sed, ultrices eget dolor. Nulla porttitor eros et mi malesuada facilisis. Vestibulum vulputate fringilla ante id placerat. Pellentesque eu libero maximus, cursus ipsum sit amet, varius velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sem arcu, tempor sed maximus et, porta quis est. Proin sem neque, semper in condimentum et, malesuada faucibus nisl. Aenean eget finibus lectus. Morbi blandit leo eget nisl vestibulum molestie. In et ante mauris.

# Hello Kevin Caster

```javascript
const name = "Kevin Caster";

function sayHello() {
  console.log("Hello Kevin Caster");
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      data,
    };
  });

  return {
    props: { posts },
  };
}
```
