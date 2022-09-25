import { Target } from 'phosphor-react'


import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import avatarPadrao from '/avatar.png'


function App() {
  return(
    <div>
      <header>
        <div className='flex justify-between p-1 bg-zinc-800 border-red-800 border-solid border-b-2'>
          <div className='pl-8 py-4 text-bold flex flex-justify text-zinc-200 gap-7'>
            
            <button className='text-2xl'><Target size={40} className=''/></button>
            <button className='text-2xl'>SHOP-GUNS</button>
          </div>
          <div className='pr-8 py-4 text-2xl flex flex-justify text-zinc-200 gap-6 '>

            <button className='hover:bg-zinc-700 p-2 hover:rounded-md'>Página Inicial</button>
            <text className='pt-1.5 text-red-800'>|</text>   
            <button className='hover:bg-zinc-700 p-2 hover:rounded-md'>Anúncios</button> 
            <text className='pt-1.5 text-red-800'>|</text>           

            <Dialog.Root>
              <Dialog.Trigger>

                  <button className='hover:text-red-800 bg-zinc-700 p-2 rounded-md'>
                    Login
                  </button>                 
                          

              </Dialog.Trigger>
                <Dialog.Portal>

                  <Dialog.Content className='fixed bg-sky-600 rounded-md p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25'>
                    <Dialog.Title> 
                      Realizar Login                       

                    </Dialog.Title>


                    <Dialog.Description>
                      Basta preencher os campos abaixo para realizar o Login.
                    </Dialog.Description>


                    <form>
                      <label htmlFor='completename'>Nome Completo:</label>
                      <input id='completename' placeholder='Jose da Silva'></input>
                    </form>

                    <Dialog.Close>
                      <button>Salvar</button>
                    </Dialog.Close>

                  </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

                        
          </div>
        </div>
      </header>  

      <body>
        <div className='mt-96 mx-10 bg-zinc-700 rounded-md text-zinc-200'>
          <div className='text-lg'>
          LOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUM
          </div>
        </div>
      </body>


    </div>
    )
}

export default App
