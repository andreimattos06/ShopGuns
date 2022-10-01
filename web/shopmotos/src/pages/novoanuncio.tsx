import React, { useEffect, useState } from "react";
import { FormEvent } from 'react';
import axios from 'axios'; 
import { CheckSquare } from "phosphor-react";

import { Form } from 'react-bootstrap';

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { copiarArray } from "../components/utils/copiarArray";



interface Infos {
    objeto: any;
}

interface Marca{
    nome: any;
}  

interface Calibre {
    nome: any;
}  

interface TipoArma {
    objeto: any[];
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

    
/*----------------------------INICIO Pegar Opções para os Selects do BD ----------------------------------------*/
    const [infos, setInfos] = useState<Infos[]>([]);
  
    
    useEffect(() => {                      //DESTA FORMA O USEEFFECT
        fetch('http://localhost:3334/infosnovoanuncio') //EXECUTA APENAS 1 X
        .then(response => response.json())
        .then(data => {                                                           //PEGA NO BD AS OPCOES PARA PREENCHER OS SELECTS
            setInfos(data)   
            
        })  

        
    }, [])

    const marcas = [''];                                                        //VARIAVEIS PARA OS SELECTS
    const tipos = [''];
    const calibres = [''];


    copiarArray(infos.slice(0,1), marcas)                                       //FUNCAO CRIADA PARA ALOCAR AS INFORMACOES RECEBIDAS DO BD
    copiarArray(infos.slice(1,2), tipos)
    copiarArray(infos.slice(2,3), calibres)
 /*----------------------------FIM Pegar Opções para os Selects do BD ----------------------------------------*/       


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
                                {tipos.map(tipo => {
                                    return(
                                        <option value={tipo}>
                                            {tipo}
                                        </option>
                                    )
                                })}
                                
                            </Form.Select>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='calibre' className='font-bold pb-2'>Calibre:</label>
                            <Form.Select name="calibre" aria-label="Selecione o calibre" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">  
                                {calibres.map(calibre => {
                                    return(
                                        <option value={calibre}>
                                            {calibre}
                                        </option>
                                    )
                                })}                    

                           </Form.Select>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='marca' className='font-bold pb-2'>Marca:</label>
                            <Form.Select name="marca" aria-label="Selecione a marca" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">  
                                {marcas.map(marca => {
                                    return(
                                        <option value={marca}>
                                            {marca}
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

    