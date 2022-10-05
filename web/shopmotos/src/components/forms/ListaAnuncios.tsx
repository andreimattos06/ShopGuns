import { InputHTMLAttributes } from 'react'

import { CaretRight } from "phosphor-react";

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function ListaAnuncios(props){
    return(
        
        <div>
            <ul>
                <li className='group bg-zinc-800 border-b-2 border-red-800 mb-10'>
                    <div className='py-5 px-5 flex gap-5 relative group-hover:bg-zinc-700'>
                        <div className=''>
                            <img className="max-h-48 min-h-48 max-w-48 min-w-48" src='https://taurusarmas.com.br/assets/img/content/products/product-242-photo-5.png'></img>
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <text className='uppercase font-bold text-4xl text-red-800'>taurus</text>
                            <text className='uppercase font-bold text-4xl text-zinc-200'>G2C</text>
                            <text className='uppercase font-bold text-2xl text-zinc-200'>9MM</text>
                            <text className='absolute inset-x-0 bottom-0 uppercase font-semi-bold text-xl text-zinc-500'>Pistola</text>
                        </div>

                        <div className='flex items-center uppercase font-bold text-5xl text-zinc-200 pl-32'>
                            <text className=''>R$</text>
                            <text className=''>5.900,00</text>
                        </div>

                        <div className='flex text-zinc-200 text-lg items-center pl-40'>
                            <text className=''>Caldas Novas</text>
                            <text className=''>-</text>
                            <text className=''>GO</text>
                        </div>

                        <div className='flex items-center absolute inset-y-0 right-0 text-zinc-200 hover group-hover:text-red-800'>
                            <CaretRight size={40} />
                        </div>

                    </div>
                </li>
            </ul>

        </div>
        
    )
}