import Link from "next/link"
import CharacterCard from "../../../components/characterCard"

const HarryPotterCharacters = ({ characters }) => {
    console.log(characters)
    const personagens = characters.map((personagem) => {
        return (<CharacterCard key={personagem.id} personagem={personagem}/>)
    })
    return(
        <main className=" flex flex-col items-center gap-10 p-10">
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