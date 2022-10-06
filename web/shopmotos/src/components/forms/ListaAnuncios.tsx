import { InputHTMLAttributes, useEffect, useState } from 'react'

import { CaretRight } from "phosphor-react";

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {

}


interface Anuncio {
    cadastroCpf: String,
    tipo: String,
    calibre: String,
    marca: String,
    modelo: String,
    valor: String,
    descricao: String,
    cidade: String,
    estado: String,
    sistemaRegistro: String,
    envio: String,
    fotos: string,
}

export function ListaAnuncios(props){

const [anuncios, setAnuncios] = useState<Anuncio[]>([]);


useEffect(() =>{
    fetch('http://localhost:3334/anuncios').then(response => response.json()).then(data =>{setAnuncios(data)})
},[])

console.log(anuncios);


const listItems = anuncios.map((anuncio) =>
    <li className='group bg-zinc-800 border-b-2 border-red-800 mb-10'>
        <div className='py-5 px-5 flex gap-5 relative group-hover:bg-zinc-700'>
            <div className=''>
                <img className="max-h-48 min-h-48 max-w-48 min-w-48" src={anuncio.fotos} alt='Foto não Encontrada'></img>
            </div>
            <div className='flex flex-col gap-1 relative'>
                <text className='uppercase font-bold text-4xl text-red-800'>{anuncio.marca}</text>
                <text className='uppercase font-bold text-4xl text-zinc-200'>{anuncio.modelo}</text>
                <text className='uppercase font-bold text-2xl text-zinc-200'>{anuncio.calibre}</text>
                <text className='absolute inset-x-0 bottom-0 uppercase font-semi-bold text-xl text-zinc-500'>{anuncio.tipo}</text>
            </div>

            <div className='flex items-center uppercase font-bold text-5xl text-zinc-200 pl-32'>
                <text className=''>R$</text>
                <text className=''>{anuncio.valor}</text>
            </div>

            <div className='flex text-zinc-200 text-lg items-center pl-40'>
                <text className=''>{anuncio.cidade}</text>
                <text className=''>-</text>
                <text className=''>{anuncio.estado}</text>
            </div>

            <div className='flex items-center absolute inset-y-0 right-0 text-zinc-200 hover group-hover:text-red-800'>
                <CaretRight size={40} />
            </div>

        </div>
    </li>

);

    return(
        
        <ul>
            {listItems}
        </ul>
        
    )
}