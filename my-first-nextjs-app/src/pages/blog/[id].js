import React from 'react'

const BlogItem = ({ post }) => {
  return (
    <div className='flex flex-col gap-8 py-20 px-10'>
        <h1 className=' text-xl font-bold text-center'>Blog</h1>
        <h2 className=' text-lg font-bold text-center'>{post.title}</h2>
        <p className=' px-64 text-center'>{post.body}</p>
    </div>
  )
}

export default BlogItem

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: { id: post.id.toString()}
    }));
    return { paths , fallback: false}
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json(); 

    return{
        props: {
            post
        }
    }
}