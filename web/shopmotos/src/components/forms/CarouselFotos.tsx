import { InputHTMLAttributes, useEffect, useState } from 'react'
import { CarouselItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


interface Anuncio {
    tipo: String,
    calibre: String,
    marca: String,
    modelo: String,
    valor: String,
    descricao: String,
    cidade: String,
    estado: String,
    sistemaRegistro: String,
    fotoPrincipal: String,
    envio: String,
    fotos: String,
    id: String,
}

export function CarouselFotos(){

    let { id } = useParams();

    const [anuncio, setAnuncio] = useState<Anuncio>();
    


    useEffect(() =>{
        fetch('http://localhost:3334/anuncios/' + id ).then(response => response.json()).then(data =>{setAnuncio(data)})
        

    },[])



    const listaFotos = anuncio?.fotos.split(",")
    

    

    const carouselFotosLista = listaFotos?.map(foto =>
        <div>
            <img src={foto} alt="Foto Genérica"/>
        </div>
    );

    console.log(carouselFotosLista)

    return(

        <div className='w-auto mt-14 grid grid-cols-8 mx-11 gap-10'>

                <div className='col-span-3'>
                    <div className='border-red-800 border-2 rounded-sm w-auto'>
                        <Carousel className='w-full h-full' infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
                            {carouselFotosLista}
                        </Carousel>
                    </div>
                    
                </div>

                <div className='col-span-5'>
                    <div className='grid grid-cols-4 gap-3'>
                        <div className='col-span-2 flex flex-col pt-6 pb-6 pl-6 uppercase bg-zinc-800 border-t-2 border-red-800'>
                            <text className='font-bold text-5xl text-zinc-200'>{anuncio?.marca}</text>
                            <text className='font-semibold text-3xl text-red-800'>{anuncio?.calibre}</text>
                            <text className='font-medium text-xl text-zinc-200 pt-20'>{anuncio?.tipo}</text>
                        </div>

                        <div className='col-span-2 grid grid-rows-4 items-center bg-zinc-800 border-b-2 border-red-800'>
                            <div className='row-span-3 place-self-center'>
                                <text className='font-bold text-5xl text-zinc-200'>R${anuncio?.valor}</text>
                            </div>
                            <div className='row-span-1 place-self-center'>

                                <text className='font-medium text-base text-zinc-200'>{anuncio?.cidade} - {anuncio?.estado}</text>
                                
                            </div>
                        </div>

                        <div className='col-span-4 bg-zinc-800 flex flex-col pt-6 pb-6 pl-6'>
                            <div className='font-semibold text-2xl text-zinc-200'>
                                <text>Descrição:</text>
                            </div>
                            
                        </div>

                    </div>
                </div>
                    
                
                    
            </div>

        
        
    )
}