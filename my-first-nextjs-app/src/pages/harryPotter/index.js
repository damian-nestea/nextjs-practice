const HarryPotterCharacters = ({ characters }) => {
    console.log(characters)
    const personagens = characters.map((personagem) => {
        return <p>{personagem.name}</p>
    })
    return(
        <div>
            {personagens}
        </div>
    )
}

export default HarryPotterCharacters;

export const getServerSideProps = async () => {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const hpCharacters = await res.json();
    return {
        props: {
            characters: hpCharacters
        }
    }
}