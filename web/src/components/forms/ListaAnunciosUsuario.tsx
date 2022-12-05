import { InputHTMLAttributes, useEffect, useState } from 'react'

import { CaretRight } from "phosphor-react";

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import anuncios from '../../pages/anuncios';

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {

}


interface Anuncio {
    tipo: String,
    calibre: String,
    marca: String,
    modelo: String,
    valor: String,
    cidade: String,
    estado: String,
    id: string,
    fotoPrincipal: string,
    registro: string,
}

interface Filtro {
    tipo: string,
    calibre: string,
    marca: string,
    modelo: string,
    registro: string,
    cidade: string,
    estado: string,
}


export function ListaAnunciosUsuario(props: Filtro){


const [anunciosUser, setAnuncios] = useState<Anuncio[]>([]);


useEffect(() =>{
    axios.post('http://localhost:3334/anunciosusuario', {
        
            token: localStorage.getItem('login')
        
    }).then(function(response){
        setAnuncios(response.data['anuncios'])
    })
    console.log(props)

    
},[])


useEffect(() => {

    let filters: any = [];
    filters["tipo"] = props.tipo; filters["calibre"] = props.calibre; filters["marca"] = props.marca; filters["modelo"] = props.modelo; 
    filters["registro"] = props.registro; filters["cidade"] = props.cidade; filters["estado"] = props.estado;

    let anunciosfiltrados: Anuncio[];

       

},[props])


const listItems = anunciosUser.map((anuncio) => {

    if(
        (props.tipo == anuncio.tipo || props.tipo == "Todos") &&
        (props.calibre == anuncio.calibre || props.calibre == "Todos") &&
        (props.marca == anuncio.marca || props.marca == "Todas") &&
        (props.modelo == anuncio.modelo || props.modelo == "") &&
        (props.registro == anuncio.registro || props.registro == "Ambos") &&
        (props.cidade == anuncio.cidade || props.cidade == "Todas") &&
        (props.estado == anuncio.estado || props.estado == "Todos")
    ){
        return(

            <li className='group bg-zinc-800 border-b-2 border-red-800 mb-10 visible'>
                <Link to={anuncio.id}>
                    <div className='py-5 px-5 grid grid-cols-12 gap-5 relative group-hover:bg-zinc-700'>
                        <div className='col-span-3  h-52 max-h-52'>
                            <img className="w-full h-full" src={anuncio.fotoPrincipal} alt='Foto não Encontrada'></img>
                        </div>
                        <div className='col-span-2 flex flex-col gap-1 relative'>
                            <text className='uppercase font-bold text-3xl text-red-800'>{anuncio.marca}</text>
                            <text className='uppercase font-bold text-3xl text-zinc-200'>{anuncio.modelo}</text>
                            <text className='uppercase font-bold text-1xl text-zinc-200'>{anuncio.calibre}</text>
                            <text className='absolute inset-x-0 bottom-0 uppercase font-semi-bold text-lg text-zinc-500'>{anuncio.tipo}</text>
                        </div>

                        <div className='col-span-4 flex items-center justify-self-center uppercase font-bold text-4xl text-zinc-200'>
                            <text className=''>R$</text>
                            <text className=''>{anuncio.valor}</text>
                        </div>

                        <div className='col-span-2 flex justify-self-end text-zinc-200 text-lg items-center'>
                            <text className=''>{anuncio.cidade}</text>
                            <text className=''>-</text>
                            <text className=''>{anuncio.estado}</text>
                        </div>

                        <div className='col-span-0 flex items-center absolute inset-y-0 right-0 text-zinc-200 hover group-hover:text-red-800'>
                            <CaretRight size={40} />
                        </div>

                    </div>
                </Link>
            </li>
        )
    }
    else{}

});

    return(
        
        <ul>
            {listItems}
        </ul>
        
    )
}