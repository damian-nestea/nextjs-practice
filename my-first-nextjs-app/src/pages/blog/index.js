import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const index = ({name ,posts}) => {
  return (
    <div>
        <Head>    
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        
            <title>Blog </title>
            <meta name="title" content="Blog" />
            <meta name="description" content="Lista de post do Blog do meu portfólio" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://localhost:3000/blog" />
            <meta property="og:title" content="Blog" />
            <meta property="og:description" content="Lista de post do Blog do meu portfólio" />
            <meta property="og:image" content="http://localhost:3000/logo.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://localhost:3000/blog" />
            <meta property="twitter:title" content="Blog" />
            <meta property="twitter:description" content="Lista de post do Blog do meu portfólio" />
            <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
        <h1>Bem-vindo</h1>
        <p>Blog do {name}</p>
        <ul className='list-disc list-inside pl-2'>
            {
                posts.map((post) => (
                    <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
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