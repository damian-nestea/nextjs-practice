import React from 'react'
import Head from 'next/head'

const BlogItem = ({ post }) => {
  return (
    <div className='flex flex-col gap-8 py-20 px-10'>
        <Head>    
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        
            <title>{post.title}</title>
            <meta name="title" content={post.title}/>
            <meta name="description" content={post.body} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`http://localhost:3000/blog/${post.id}`} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.body} />
            <meta property="og:image" content="http://localhost:3000/logo.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`http://localhost:3000/blog/${post.id}`} />
            <meta property="twitter:title" content={post.title} />
            <meta property="twitter:description" content={post.body} />
            <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
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