import * as Dialog from '@radix-ui/react-dialog'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import axios from 'axios'
import { SignIn, Target, UserPlus, House, User, Table, Password } from 'phosphor-react'
import { FormEvent, InputHTMLAttributes, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Input } from './Input'
import { SubmitButton } from './submitButton'




export function Header(){

    const [tokenLogin, setTokenLogin] = useState<String>();
    console.log(tokenLogin)

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
                        <NavigationMenu.Trigger>Meu Cadastro</NavigationMenu.Trigger>

                        <NavigationMenu.Content>
                            <div>
                                <div>
                                    a
                                </div>
                                <div>
                                    b
                                </div>
                                <div>
                                    b
                                </div>
                                <div>
                                    <button onClick={e => {setTokenLogin(undefined)}}>Sair</button>
                                </div>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Indicator/>
                </NavigationMenu.List>

                <NavigationMenu.Viewport className='absolute border-red-800 border-2 overflow-visible'/>
            </NavigationMenu.Root>
                
        
    }


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
                        
                        {header}

                    </div>           
          
                </div>

            </div>
        
    )

   
}