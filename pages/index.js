import { getPosts } from "@/lib/post";
import Link from "next/link";

export async function getStaticProps(){
  const posts = await getPosts();
  return {
    props:{posts}
  }
}

export default function Home({posts}) {
  console.log(posts);
  return (
    <>
      <main>
      <h1 className="title-header">My Blog</h1>
        <div className="container">
        <ul className="blog-list">
          {posts.map((post)=>{
           return  <li key={post.id}>
            <Link href={`/posts/${post.slug}`} >
              {post.title}
            </Link>
           </li>
          })}
         
        </ul>
        </div>
      </main>
    </>
  )
}
