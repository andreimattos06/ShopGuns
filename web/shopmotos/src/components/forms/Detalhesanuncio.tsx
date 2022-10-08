
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from './footer'
import { Header } from './header'




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
    fotoPrincipal: string,
    envio: String,
    fotos: string,
    id: string,
}


export function Detalhesanuncio(){


    let { id } = useParams();

    const [anuncio, setAnuncio] = useState<Anuncio>();
    


    useEffect(() =>{
        fetch('http://localhost:3334/anuncios/' + id ).then(response => response.json()).then(data =>{setAnuncio(data)})

    },[])

    console.log(anuncio)

    return(

        <div>
            <Header />
                A
                <img src={anuncio?.fotoPrincipal} alt='Teste'/>

            <Footer />
        </div>
            
        
    )
}