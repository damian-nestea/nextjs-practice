import React, { useEffect, useState } from 'react'

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
        <h1 className=' border-l border-l-red-600 text-4xl mb-2 pl-2'>Album</h1>
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