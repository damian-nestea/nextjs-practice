import React, { useEffect, useState } from 'react'
import Head from 'next/head';

const Album = () => {
    const [album , setAlbum] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        loadAlbum ();
    } ,[]);

    const loadAlbum = async () => {
        setLoading(true);
        const res = await fetch ("https://jsonplaceholder.typicode.com/albums");
        const albumItems = await res.json();
        setAlbum(albumItems)
        setLoading(false);
    }

  return (
    <div className=' p-10'>
        <Head>    
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        
            <title>Album</title>
            <meta name="title" content="Album" />
            <meta name="description" content="Lista para album do meu portfólio" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://localhost:3000/album" />
            <meta property="og:title" content="Album" />
            <meta property="og:description" content="Lista para album do meu portfólio" />
            <meta property="og:image" content="http://localhost:3000/logo.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://localhost:3000/album" />
            <meta property="twitter:title" content="Album" />
            <meta property="twitter:description" content="Lista para album do meu portfólio" />
            <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
        <h1 className=' border-l border-l-red-600 text-4xl mb-2 pl-2'>Album</h1>
        {
            loading && <p className=' text-red-700 text-xl'>Loading...</p>
        }
        <ul className=' list-disc list-inside'>
            {
                album.map((albumItem) => (
                    <li className=' first-letter:uppercase' key={albumItem.id}>{albumItem.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Album