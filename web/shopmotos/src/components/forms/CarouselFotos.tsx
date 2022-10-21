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

        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
            {carouselFotosLista}
        </Carousel>
        
    )
}