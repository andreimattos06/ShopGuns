import * as Dialog from '@radix-ui/react-dialog'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import axios from 'axios'
import { SignIn, Target, UserPlus, House, User, Table, Password, UserCircle } from 'phosphor-react'
import { FormEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import { Input } from './Input'
import { SubmitButton } from './submitButton'
import Dropdown from 'react-bootstrap/Dropdown';
import { DesenharLinha } from '../utils/desenharLinha'




export function Header(){

    const [tokenLogin, setTokenLogin] = useState<String>();



    function verLogin () {
        const token = localStorage.getItem('login');
        if (token){
            setTokenLogin(token);
        }
        else{
            setTokenLogin(undefined);
        }
    }




    async function handleLoginUser(event: FormEvent) {

        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        
    
        try {
            await axios.post('http://localhost:3334/login', {
                
                email: data.email,
                password: data.senha,
                
            }).then(function(response) {
                setTokenLogin(response.data.email);
                localStorage.setItem('login', response.data.email);
                
            })
            
        }
        catch(err){
            alert('a')
        }
        
    
    }

    let header;
    if(!tokenLogin?.localeCompare("undefined")){
        header = 

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

                        <form onSubmit={handleLoginUser}>

                               <div className='flex flex-col text-zinc-200 text-lg pt-7'>
                                    <label htmlFor='email' className='font-bold pb-2'>E Mail:</label>
                                    <Input name="email" id='email' placeholder='exemplo@gmail.com'></Input>

                                    <label htmlFor='senha' className='font-bold pb-2 pt-6'>Senha:</label>
                                    <Input name="senha" type="password" id='senha' placeholder='*******'></Input>
                                </div>

                                

                              

                                <div className='flex justify-between text-zinc-200 font-semibold pt-10'>

                                    <div className='order-first'> 

                                        
                                            
                                            <SubmitButton type="submit">
                                                <SignIn size={26} />
                                                Enviar
                                            </SubmitButton>
                                        
                                    
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

                            </form>           

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        
    }
    else{
        header =
            <NavigationMenu.Root className='text-zinc-200'>
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        
                            <NavigationMenu.Trigger className='flex flex-row'>
                                
                                <UserCircle size={34} weight="light" className='text-red-800 pr-1.5'/>
                                Meu Cadastro
                                
                                
                            </NavigationMenu.Trigger>
                                              

                        <NavigationMenu.Content className='mr-5'>
                            <i className=' border-red-800 border-b-0 border-r-0 bg-zinc-800 border-2 pb-3 pl-3 rotate-45 absolute inline-flex left-3 top-[2px] z-20'></i>

                            
                            <div className='bg-zinc-800 border-red-800 border-2 py-5 px-4 flex flex-col rounded-md text-lg gap-3 mt-2 z-10'>
                                <div>
                                    <Link to='/anunciosusuario'>
                                    Meus Anúncios
                                    </Link>
                                    
                                </div>
                                <DesenharLinha cor="rgb(157,27,27)" tamanho="2px"/>
                                <div>
                                    <Link to='/cadastrousuario'>
                                        Alterar Dados
                                    </Link>
                                </div>
                                <DesenharLinha cor="rgb(157,27,27)" tamanho="2px"/>
                                <div>
                                    <button onClick={e => {setTokenLogin(undefined); localStorage.removeItem("login");}}>Sair</button>
                                </div>
                            </div>
                            
                        </NavigationMenu.Content>
                        
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Indicator/>
                    
                </NavigationMenu.List>
                

                <NavigationMenu.Viewport className='absolute overflow-visible'/>
            </NavigationMenu.Root>
                
        
    }


    useEffect(() => {
        verLogin();
    }, [])
    return(
            <div className='flex justify-between p-1 bg-zinc-800 border-red-800 border-solid border-b-2'>
                <div className='pl-8 text-bold flex flex-justify text-zinc-200 gap-7 max-h-32'>

                    <img src='../src/public/logotransparente.png' className=''/>

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
                        
                        {header}

                    </div>           
          
                </div>

            </div>
        
    )

   
}