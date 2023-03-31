import React from 'react'

const index = ({name ,posts}) => {
  return (
    <div>
        <h1>Bem-vindo</h1>
        <p>Blog do {name}</p>
        <ul>
            {
                posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
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
        }
    }
}

export default index