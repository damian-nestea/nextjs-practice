import Link from "next/link"
import CharacterCard from "../../../components/CharacterCard"
import Head from "next/head"

const HarryPotterCharacters = ({ characters }) => {
    console.log(characters)
    const personagens = characters.map((personagem) => {
        return (<CharacterCard key={personagem.id} personagem={personagem}/>)
    })
    return(
        <main className=" flex flex-col items-center gap-10 p-10">
            <Head>    
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            
                <title>Harry Potter</title>
                <meta name="title" content="Harry Potter" />
                <meta name="description" content="Lista de personagens do filme Harry Potter." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/harryPotter" />
                <meta property="og:title" content="Harry Potter" />
                <meta property="og:description" content="Lista de personagens do filme Harry Potter." />
                <meta property="og:image" content="http://localhost:3000/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/harryPotter" />
                <meta property="twitter:title" content="Harry Potter" />
                <meta property="twitter:description" content="Lista de personagens do filme Harry Potter." />
                <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
            </Head>
            <Link className=" self-end p-4 bg-slate-500 rounded-md text-zinc-50 font-bold uppercase hover:opacity-50" href={'/harryPotterStaff'}> Staff </Link>
            <h1 className=" text-3xl font-bold">Personagens do Harry Potter</h1>
            <section className="flex flex-wrap gap-6 justify-evenly">
                {personagens} 
            </section>
        </main>
    )
}

export default HarryPotterCharacters;

export const getServerSideProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_HP);
    const hpCharacters = await res.json();
    return {
        props: {
            characters: hpCharacters
        }
    }
}