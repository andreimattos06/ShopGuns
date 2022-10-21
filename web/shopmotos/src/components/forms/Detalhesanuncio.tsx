import { CarouselFotos } from './CarouselFotos';
import { Footer } from './footer'
import { Header } from './header'







export function Detalhesanuncio(){





    return(

        <div>
            <Header />
                <div className='w-2/6 mt-20'>
                    
                     <CarouselFotos/>
                    
                </div>

            <Footer />
        </div>
            
        
    )
}