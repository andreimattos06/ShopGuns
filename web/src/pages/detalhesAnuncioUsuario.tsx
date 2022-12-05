import axios from 'axios';
import { Swap, Trash } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { CarouselFotos } from '../components/forms/CarouselFotos';
import { Footer } from '../components/forms/footer'
import { Header } from '../components/forms/header'
import { SubmitButton } from '../components/forms/submitButton';



export function DetalhesAnuncioUsuario(){

    let { id } = useParams();

    async function handleExcluirAnuncio(){

        await axios.post('http://localhost:3334/excluiranuncio/' + id, {

        })

    }


    return(

        <div>
            <Header />

            <CarouselFotos />

            <div className='flex flex-row-reverse pr-11 pt-5 gap-5'>

                <SubmitButton onClick={handleExcluirAnuncio} type="submit">
                    <Trash size={32} />
                    Excluir Anúncio
                </SubmitButton>

                <SubmitButton type="submit">
                    <Swap size={32} />
                    Alterar Anúncio
                </SubmitButton>
            </div>

            <Footer />
        </div>
            
        
    )
}