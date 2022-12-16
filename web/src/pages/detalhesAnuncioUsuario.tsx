import axios from 'axios';
import { Plus, Trash } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { CarouselFotos } from '../components/forms/CarouselFotos';
import { Footer } from '../components/forms/footer'
import { Header } from '../components/forms/header'
import { SubmitButton } from '../components/forms/submitButton';

export function DetalhesAnuncioUsuario(){
    let { id } = useParams();

    async function handleExcluirAnuncio(){
        await axios.post(`http://localhost:3334/excluiranuncio/${id}`);
    }

    return(
        <div>
            <Header />
            <CarouselFotos />

            <div className='flex flex-row-reverse mx-11 pt-6'>
                <Link to="/anunciosusuario">
                    <SubmitButton onClick={handleExcluirAnuncio}>
                        <Trash size={28} />
                        Excluir Anúncio
                    </SubmitButton>
                </Link>
            </div>
            <Footer />
        </div>
    )
}
