import React from 'react'

const index = ({name ,posts}) => {
  return (
    <div>
        <h1>Bem-vindo</h1>
        <p>Blog do {name}</p>
        <ul className='list-disc list-inside pl-2'>
            {
                posts.map((post) => (
                    <li key={post.id}><a href={`/blog/${post.id}`}>{post.title}</a></li>
                ))
            }
        </ul>

    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props : {
            name: "Damian",
            posts
        },
        revalidate : 7200
    }
}

export default index