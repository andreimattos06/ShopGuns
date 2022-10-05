import { InputHTMLAttributes } from 'react'

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function ListaAnuncios(props){
    return(
        
        <div>
            <ul>
                <li className='bg-zinc-800 border-b-2 border-red-800'>
                    <div className='py-5 px-5 flex gap-5'>
                        <div className='border-[3px] border-red-800'>
                            <img className="max-h-48 min-h-48 max-w-48 min-w-48" src='https://taurusarmas.com.br/assets/img/content/products/product-242-photo-5.png'></img>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <text className='uppercase font-bold text-4xl text-zinc-200'>taurus</text>
                            <text className='uppercase font-bold text-4xl text-red-800'>G2C</text>
                            <text className='uppercase font-bold text-2xl text-zinc-200'>9MM</text>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        
    )
}