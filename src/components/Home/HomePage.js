import React from 'react';
import Link from "next/link";
import { getPosts } from '../../app/posts/getPosts';



const HomePage = async () => {
  const blogPosts = await getPosts();
  return (
    <div className='my-10 px-20'>
      <h1 className='text-center text-4xl text-purple-500'>Blog Posts</h1>
    <div>
    <ul className='p-10 grid lg:grid-cols-4 gap-5'>
        {blogPosts.map((post) => (
          <li key={post.id}
          className='bg-purple-200 text-center p-5'>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default HomePage;