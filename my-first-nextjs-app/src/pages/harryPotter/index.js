import CharacterCard from "../components/characterCard"

const HarryPotterCharacters = ({ characters }) => {
    console.log(characters)
    const personagens = characters.map((personagem) => {
        return (<CharacterCard key={personagem.id} personagem={personagem}/>)
    })
    return(
        <div className=" flex flex-wrap gap-6">
            {personagens}
        </div>
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