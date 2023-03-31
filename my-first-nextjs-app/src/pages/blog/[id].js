import React from 'react'

const BlogItem = ({ post }) => {
  return (
    <div>
        <h1>Blog</h1>
        <h2>{post.titulo}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default BlogItem

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: {
            id:post.id.toString()
        }
    }));
    return { paths , fallback: false}
}

export const getStaticProps = async () => {

}