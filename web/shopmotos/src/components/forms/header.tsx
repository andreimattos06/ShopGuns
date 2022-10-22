import * as Dialog from '@radix-ui/react-dialog'
import { SignIn, Target, UserPlus, House, User, Table } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Input } from './Input'
import { SubmitButton } from './submitButton'


export function Header(){
    return(
            <div className='flex justify-between p-1 bg-zinc-800 border-red-800 border-solid border-b-2'>
                <div className='pl-8 text-bold flex flex-justify text-zinc-200 gap-7 max-h-32'>

                    <img src='../public/logotransparente.png' className=''/>

                </div>
                <div className='pr-8 py-1 text-2xl flex justify-center items-center text-zinc-200 gap-6 '>

                    <Link to='/'>
                        
                        <button className='hover:bg-zinc-700 p-2 hover:rounded-md flex'>
                            <House size={32} className='text-red-800 pr-1.5'/>
                            Página Inicial
                        </button>
                    </Link>
                    <text className='pt-1.5 text-red-800'>|</text>   

                    <Link to='/anuncios'>
                        <button className='hover:bg-zinc-700 p-2 hover:rounded-md flex'>
                            <Table size={32} className='text-red-800 pr-1.5'/>
                            Anúncios
                        </button> 
                    </Link>

                    <text className='pt-1.5 text-red-800'>|</text>

                    <div>
                        
                    <Dialog.Root>
                        <Dialog.Trigger>

                            <button className='hover:text-red-800 bg-zinc-700 p-2 rounded-md flex'>
                                <User size={32} className='text-red-800 pr-1.5'/>
                                Login
                            </button>                 
                                    

                        </Dialog.Trigger>
                        <Dialog.Portal>

                        <Dialog.Content className='fixed bg-zinc-800 px-16 pb-12 pt-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25 w-2/6 rounded-md'>
                            <Dialog.Title> 
                            <text className='text-zinc-200 font-bold text-3xl'>
                                Realizar Login </text>                      

                            </Dialog.Title>                   

                            <form>

                                <div className='flex flex-col text-zinc-200 text-lg pt-7'>
                                <label htmlFor='email' className='font-bold pb-2'>E Mail:</label>
                                <Input id='email' placeholder='exemplo@gmail.com'></Input>

                                <label htmlFor='senha' className='font-bold pb-2 pt-6'>Senha:</label>
                                <Input id='senha' placeholder='*******'></Input>
                                </div>

                            </form>   

                            <div className='flex justify-between text-zinc-200 font-semibold pt-10'>

                                <div className='order-first'> 

                                    <Dialog.Close>
                                        
                                        <SubmitButton>
                                        <SignIn size={26} />
                                        Enviar
                                        </SubmitButton>
                                    </Dialog.Close>
                                
                                </div>

                                <div className='order-last'>

                                    <Link to='/cadastro'>
                                        <SubmitButton>
                                            <UserPlus size={26} />
                                            Cadastre-se
                                        </SubmitButton>
                                    </Link>

                                </div>
                            
                            </div>           

                        </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>

                    
                    </div>           

                    
                                
                </div>
            </div>
        
    )
}