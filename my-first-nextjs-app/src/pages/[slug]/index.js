import  { useRouter } from 'next/router'
import { useEffect } from 'react';

const SobreItem = () => {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const handelRouteChange = (url) =>{
          console.log(`Indo para ${url}`);
        }
        router.events.on('routeChangeComplete' ,  handelRouteChange)
        
        return () => {
          router.events.off('routeChangeComplete' , handelRouteChange)
        }
      } , [])
    return(
        <div className='flex flex-col'>
            <header className=' bg-gradient-to-b from-gray-600 to-gray-950 min-h-1/5 flex items-center justify-between px-32 py-2'>
                <span className=' text-2xl font-bold text-blue-700'>LOGO</span>
                <nav>
                    <ul className='flex space-x-8 uppercase list-none text-white'>
                        <li><a>Início</a></li>
                        <li><a>Sobre nós</a></li>
                        <li><a>O site</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main className=' min-h-3/5 bg-gray-300 p-10'>
                <h1>Página de <span className='font-bold underline uppercase text-orange-500'>{slug}</span></h1>
                <p>Pathname : {router.pathname}</p>
                <p>IsFallback : {router.isFallback.toString()}</p>
                <p>Query : {slug.query}</p>
            </main>
            <footer className='bg-gray-400 min-h-1/5 flex px-32 py-2'>
                <p className='flex items-center'><button onClick={() => {router.push('../')}} className=' bg-gradient-to-tr from-blue-700 to-gray-700 p-2 m-1 text-neutral-400 rounded hover:ring-red-400 hover:ring-4'>VOLTAR</button></p>
            </footer>
        </div>
    )
}
export default SobreItem;