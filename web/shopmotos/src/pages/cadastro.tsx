import React from "react";
import {FormEvent} from 'react';
import axios from 'axios'; 

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";


async function handleCreateCad(event: FormEvent){

    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try{

        await axios.post('http://localhost:3334/cadastro', {
            cpf : data.cpf,
            email: data.email,
            password: data.password,
            nomeCompleto: data.nomeCompleto,
            logradouro: data.logradouro,
            endereco : data.endereco,
            numero: data.numero,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            contato: data.contato
        })

    }catch(err){
        alert('Erro ao criar cadastro');
        console.log(err);
    }
    
}

export default () => (
    <div>
    
        <Header />

        <div className="w-full h-auto flex place-content-center mt-10">
            <div className="w-10/12 bg-zinc-800 rounded-s">
                <text className="text-zinc-200 font-bold text-3xl">
                    Preencher Cadastro
                </text>
                
                <form onSubmit={handleCreateCad} className="text-zinc-200">
                    <div className="grid grid-cols-4">
                        <div className="col-span-4 bg-red-500">
                            <label htmlFor='nomeCompleto' className='font-bold pb-2'>Nome Completo:</label>
                            <Input className="h-96" name='nomeCompleto' id='nomeCompleto' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='email' className='font-bold pb-2'>Email:</label>
                            <Input name='email' id='email' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='password' className='font-bold pb-2'>Senha:</label>
                            <Input name='password' id='password' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='cpf' className='font-bold pb-2'>CPF:</label>
                            <Input name='cpf' id='cpf' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='logradouro' className='font-bold pb-2'>Logradouro:</label>
                            <Input name='logradouro' id='logradouro' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='endereco' className='font-bold pb-2'>Endereço:</label>
                            <Input name='endereco' id='endereco' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='numero' className='font-bold pb-2'>Numero:</label>
                            <Input name='numero' id='numero' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='bairro' className='font-bold pb-2'>Bairro:</label>
                            <Input name='bairro' id='bairro' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                            <Input name='cidade' id='cidade' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                            <Input name='estado' id='estado' placeholder='111.222.333-44'></Input>
                        </div>

                        <div>
                            <label htmlFor='contato' className='font-bold pb-2'>Contato:</label>
                            <Input name='contato' id='contato' placeholder='111.222.333-44'></Input>
                        </div>

                        
                    </div>

                    <button type="submit">
                        Enviar
                    </button>
                    
                                        
                </form>
            </div>
            
        </div>

   

    </div>
)