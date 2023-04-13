const HarryPotterCharacters = ({ characters }) => {
    console.log(characters)
    const personagens = characters.map((personagem) => {
        return <p key={personagem.id}>{personagem.name}</p>
    })
    return(
        <div>
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