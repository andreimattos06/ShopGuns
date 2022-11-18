import React, { useEffect, useState } from "react";
import { FormEvent } from 'react';
import axios from 'axios'; 
import { CheckSquare } from "phosphor-react";

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { Footer } from "../components/forms/footer";
import { SubmitButton } from "../components/forms/submitButton";

interface Cadastro{
    cpf: String,           
    email: String,         
    password: String,     
    nomeCompleto: String, 
    logradouro: String,   
    endereco: String,     
    numero: String,       
    bairro: String,       
    cidade: String,       
    estado: String,       
    contato: String,  

}



export default () => {

    const [cadastro, setCadastro] = useState<Cadastro>();

    useEffect(() => {
        axios.post('http://localhost:3334/dadosusuario', {

            token: localStorage.getItem('login'),

        }).then(function(response){
            
            setCadastro(response.data)

        })
    },[])


    async function handleSubmit(event: FormEvent){

        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
            await axios.post('http://localhost:3334/atualizarcadastro', {
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

            
        }catch{

        }

    }

    
    return(

    

        <div className='flex flex-col'>
        
            <Header />

            <div className="w-full h-auto flex place-content-center mt-10">
                <div className="w-10/12 bg-zinc-800 rounded-s pt-16 px-28 pb-16 border-red-800 border-2">
                    <text className="text-zinc-200 font-bold text-5xl">
                        Alterar Cadastro
                    </text>
                    
                    <form onSubmit={handleSubmit} className="">
                        <div className="grid grid-cols-2 mt-14 text-zinc-200 text-xl">
                            <div className="flex flex-col pr-5 pb-5">
                                <label htmlFor='nomeCompleto' className='font-bold pb-2'>Nome Completo:</label>
                                <Input className="h-96" name='nomeCompleto' id='nomeCompleto' placeholder='José da Silva' defaultValue={cadastro?.nomeCompleto}></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='email' className='font-bold pb-2'>Email:</label>
                                <Input name='email' id='email' placeholder='exemplo@gmail.com' defaultValue={cadastro?.email}></Input>
                            </div>

                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='password' className='font-bold pb-2'>Senha:</label>
                                <Input name='password' id='password' placeholder='********' defaultValue={cadastro?.password}></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='cpf' className='font-bold pb-2'>CPF:</label>
                                <Input name='cpf' id='cpf' placeholder='111.222.333-44' defaultValue={cadastro?.cpf}></Input>
                            </div>

                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='logradouro' className='font-bold pb-2'>Logradouro:</label>
                                <Input name='logradouro' id='logradouro' placeholder='Av.' defaultValue={cadastro?.logradouro}></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='endereco' className='font-bold pb-2'>Endereço:</label>
                                <Input name='endereco' id='endereco' placeholder='Jardim dos Ipes' defaultValue={cadastro?.endereco}></Input>
                            </div>

                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='numero' className='font-bold pb-2'>Numero:</label>
                                <Input name='numero' id='numero' placeholder='22' defaultValue={cadastro?.numero}></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='bairro' className='font-bold pb-2'>Bairro:</label>
                                <Input name='bairro' id='bairro' placeholder='Centro' defaultValue={cadastro?.bairro}></Input>
                            </div>

                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                                <Input name='cidade' id='cidade' placeholder='Caldas Novas' defaultValue={cadastro?.cidade}></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                                <Input name='estado' id='estado' placeholder='Goiás' defaultValue={cadastro?.estado}></Input>
                            </div>

                            <div className='flex flex-col pr-5 pb-16'>
                                <label htmlFor='contato' className='font-bold pb-2'>Contato:</label>
                                <Input name='contato' id='contato' placeholder='(64) 99999-8888' defaultValue={cadastro?.contato}></Input>
                            </div>

                            
                        </div>

                        <div className="flex flex-row-reverse">
                            <SubmitButton type="submit">
                                <CheckSquare size={32} />
                                Atualizar Informações
                            </SubmitButton>

                        </div>
                                            
                    </form>
                </div>
                
            </div>


            <Footer />


        </div>
    )
    
}