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
        <div className='h-full'>
            <img className='h-full'  src={foto} alt="Erro ao Carregar a Foto!"/>
        </div>
    );

    console.log(carouselFotosLista)

    return(

        <div className='w-auto mt-14 grid grid-cols-8 mx-11 gap-10'>

                <div className='col-span-3'>
                    <div className='border-red-800 border-2 rounded-sm w-auto h-full bg-zinc-800 flex'>
                        <Carousel className='w-full h-full' infiniteLoop={true} showThumbs={false} showStatus={false} 
                               >
                            {carouselFotosLista}
                        </Carousel>
                    </div>
                    
                </div>

                <div className='col-span-5'>
                    <div className='grid grid-cols-4 gap-3'>
                        <div className='col-span-2 flex flex-col pt-6 pb-6 pl-6 uppercase bg-zinc-800 border-b-2 border-red-800'>
                            <text className='font-bold text-4xl text-zinc-200'>{anuncio?.marca}</text>
                            <text className='font-bold text-3xl text-red-800'>{anuncio?.modelo}</text>
                            <text className='font-semibold text-2xl text-zinc-200'>{anuncio?.calibre}</text>
                            <text className='font-medium text-xl text-zinc-500 pt-20'>{anuncio?.tipo}</text>
                        </div>

                        <div className='col-span-2 grid grid-rows-4 items-center bg-zinc-800 border-b-2 border-red-800'>
                            <div className='row-span-3 place-self-center'>
                                <text className='font-bold text-[40px] text-zinc-200'>R${anuncio?.valor}</text>
                            </div>
                            <div className='row-span-1 place-self-center'>

                                <text className='font-medium text-base text-zinc-200'>{anuncio?.cidade} - {anuncio?.estado}</text>
                                
                            </div>
                        </div>

                        <div className='col-span-4 bg-zinc-800 flex flex-col pt-6 pb-6 pl-6 border-b-2 border-red-800'>
                            <div className='text-zinc-200 flex flex-col gap-3'>
                                <text className='font-bold text-2xl'>Descrição:</text>
                                <text>{anuncio?.descricao}</text>
                            </div>
                            
                        </div>

                    </div>
                </div>
                    
                
                    
            </div>

        
        
    )
}