import  { useRouter } from 'next/router'

const SobreItem = () => {
    const router = useRouter();
    const { slug } = router.query;
    return(
        <div className='flex flex-col'>
            <header className='bg-gray-400 min-h-1/5 flex items-center justify-between px-32 py-2'>
                <span className=' text-2xl font-bold text-blue-700'>LOGO</span>
                <nav>
                    <ul className='flex space-x-8 uppercase list-none'>
                        <li><a>Início</a></li>
                        <li><a>Sobre nós</a></li>
                        <li><a>O site</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main className=' min-h-3/5 bg-gray-300 p-10'>
                <h1>Página de <span className='font-bold underline uppercase text-orange-500'>{slug}</span></h1>
            </main>
            <footer className='bg-gray-400 min-h-1/5 flex px-32 py-2'>
                <p className='flex items-center'><button onClick={() => {router.push('../')}} className=' bg-stone-800 p-2 m-1 text-neutral-400 rounded hover:ring-red-400 hover:ring-4'>VOLTAR</button></p>
            </footer>
        </div>
    )
}
export default SobreItem;