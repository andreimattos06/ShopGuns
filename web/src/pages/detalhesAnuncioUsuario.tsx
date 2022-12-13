import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CarouselFotos } from '../components/forms/CarouselFotos';
import { Footer } from '../components/forms/footer'
import { Header } from '../components/forms/header'

export function DetalhesAnuncioUsuario(){
    let { id } = useParams();

    async function handleExcluirAnuncio(){
        await axios.post(`http://localhost:3334/excluiranuncio/${id}`);
    }

    return(
        <div>
            <Header />
            <CarouselFotos />
            <Footer />
        </div>
    )
}
