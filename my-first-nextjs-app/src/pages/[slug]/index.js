import  { useRouter } from 'next/router'

const SobreItem = () => {
    const router = useRouter();
    const { slug } = router.query;
    return(
        <div className='flex flex-col gap-4'>
            <h1>Página de <span className='font-bold underline uppercase text-orange-500'>{slug}</span></h1>
            <p className='flex items-center'><a href='../' className=' bg-stone-800 p-2 m-1 text-neutral-400 rounded'>VOLTAR</a></p>
        </div>
    )
}
export default SobreItem;