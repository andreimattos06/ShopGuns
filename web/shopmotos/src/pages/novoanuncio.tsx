import React, { useEffect, useState } from "react";
import { FormEvent } from 'react';
import axios from 'axios'; 
import { CheckSquare } from "phosphor-react";

import { Form } from 'react-bootstrap';

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";



interface Marca {
    nome: Undefined;
  }


async function handleCreateAnuncio(event: FormEvent){

    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    
    console.log(data.tipo)
    console.log(data.calibre) 
    console.log(data.marca)   
    
}




export default () => {

    const [marcas, setMarcas] = useState<Marca[]>([]);
    
      useEffect(() => {                      //DESTA FORMA O USEEFFECT
          fetch('http://localhost:3334/marcasarmas') //EXECUTA APENAS 1 X
          .then(response => response.json())
          .then(data => {
            setMarcas(data)
          })  
        }, [])
    

    return(

        
        <div className='flex flex-col'>
    
        <Header />

        <div className="w-full h-auto flex place-content-center mt-10">
            <div className="w-10/12 bg-zinc-800 rounded-s pt-16 px-28 pb-16 border-red-800 border-2">
                <text className="text-zinc-200 font-bold text-5xl">
                    Dados do anúncio
                </text>
                
                <form onSubmit={handleCreateAnuncio} className="">
                    <div className="grid grid-cols-2 mt-14 text-zinc-200 text-xl">
                        <div className="flex flex-col pr-5 pb-5">
                            <label htmlFor='tipo' className='font-bold pb-2'>Tipo do Armamento:</label>
                            <Form.Select name="tipo" aria-label="Selecione o tipo do armamento" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">  
                                <option disabled={true} >Selecione:</option>
                                <option value="carabina">Carabina</option>
                                <option value="espingarda">Espingarda</option>
                                <option value="fuzil">Fuzil</option>
                                <option value="pistola">Pistola</option>
                                <option value="revolver">Revolver</option>
                                <option value="rifle">Rifle</option>
                                <option value="submetralhadora">Submetralhadora</option>
                                
                            </Form.Select>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='calibre' className='font-bold pb-2'>Calibre:</label>
                            <Form.Select name="calibre" aria-label="Selecione o calibre" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">  
                                <option disabled={true} >Selecione:</option>
                                <option value="38">.38</option>
                                <option value="380">.380</option>
                                <option value="308">.308</option>
                                <option value="32">.32</option>
                                <option value="5,56x45MM">5,56x45MM</option>
                                <option value="223">.223</option>
                                <option value="7,62X39MM">7,62X39MM</option>
                                <option value="25">.25</option>
                                <option value="22 LR">.22 LR</option>
                                <option value="380 AUTO">.380 AUTO</option>
                                <option value="9MM">9MM</option>
                                <option value="308 WINCHESTER">.308 WINCHESTER</option>
                                <option value="38 SPL">.38 SPL</option>
                                <option value="357 MAGNUM">.357 MAGNUM</option>
                                <option value="12">.12</option>
                                <option value="40">.40</option>
                                <option value="44 MAGNUM">.44 MAGNUM</option>
                                <option value="45 AUTO">.45 AUTO</option>
                                <option value="454 CASULL">.454 CASULL</option>
                                <option value="7,62X51MM">.7,62X51MM</option>
                                <option value="44-40 WIN">.44-40 WIN</option>
                                <option value="44 S&W SPL">.44 S&W SPL</option>
                                <option value="45 GAP">.45 GAP</option>
                                <option value="16">.16</option>
                                <option value="20">.20</option>
                                <option value="9MM LUGER">9MM LUGER</option>
                                <option value="24">.24</option>
                                <option value="36">.36</option>
                                <option value="40 S&W">.40 S&W</option>
                                <option value="32 S&W LONG">.32 S&W LONG</option>
                                <option value="38 SUPER AUTO">.38 SUPER AUTO</option>
                                <option value="223 REMINGTON">.223 REMINGTON</option>
                                <option value="30">.30</option>                              

                           </Form.Select>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='marca' className='font-bold pb-2'>Marca:</label>
                            <Form.Select name="marca" aria-label="Selecione a marca" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">  
                                {marcas.map(marca => {
                                    return(
                                        <option value={marca.nome}>
                                            {marca.nome}
                                        </option>
  
                                    )

                                })}
                         
                            </Form.Select>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='cpf' className='font-bold pb-2'>CPF:</label>
                            <Input name='cpf' id='cpf' placeholder='111.222.333-44'></Input>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='logradouro' className='font-bold pb-2'>Logradouro:</label>
                            <Input name='logradouro' id='logradouro' placeholder='Av.'></Input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='endereco' className='font-bold pb-2'>Endereço:</label>
                            <Input name='endereco' id='endereco' placeholder='Jardim dos Ipes'></Input>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='numero' className='font-bold pb-2'>Numero:</label>
                            <Input name='numero' id='numero' placeholder='22'></Input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='bairro' className='font-bold pb-2'>Bairro:</label>
                            <Input name='bairro' id='bairro' placeholder='Centro'></Input>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                            <Input name='cidade' id='cidade' placeholder='Caldas Novas'></Input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                            <Input name='estado' id='estado' placeholder='Goiás'></Input>
                        </div>

                        <div className='flex flex-col pr-5 pb-16'>
                            <label htmlFor='contato' className='font-bold pb-2'>Contato:</label>
                            <Input name='contato' id='contato' placeholder='(64) 99999-8888'></Input>
                        </div>

                        
                    </div>

                    <div className="flex flex-row-reverse">
                        <button type="submit" className="flex text-bold text-xl bg-red-800 rounded-md px-4 py-2 gap-2 hover:text-zinc-900 text-zinc-200">
                            <CheckSquare size={32} />
                            Realizar Cadastro
                        </button>

                    </div>
                                        
                </form>
            </div>
            
        </div>

   

    </div>


    );
}

    