import React, { useEffect, useState } from "react";
import { FormEvent } from 'react';
import axios from 'axios'; 
import { CheckSquare } from "phosphor-react";

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { Footer } from "../components/forms/footer";
import { SubmitButton } from "../components/forms/submitButton";
import { Form } from "react-bootstrap";


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

        alert('Cadastro criado com sucesso!')


    }catch(err){
        alert('Erro ao criar cadastro');
        console.log(err);
    
    }
    
}

interface Estado{
    id: string,
    sigla: string,
    nome: string,
}

interface Municipio{
    id: string,
    nome: string,
}

export default () => {
    
    const [estado, setEstado] = useState<Estado[]>();
    const [municipio, setMunicipio] = useState<Municipio[]>();


    async function handleEstado(event: FormEvent){

        let siglaBusca = event.target.value;

        let idBusca = estado?.find(e => e.sigla == siglaBusca)

        const todas_cidades = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idBusca.id}/municipios?orderBy=nome`);
        setMunicipio(todas_cidades["data"]);


    }


    useEffect(() => {
        
        (async function getEstados(){
            const todos_estados = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
            setEstado(todos_estados["data"]);

            const todas_cidades = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/11/municipios?orderBy=nome`);
            setMunicipio(todas_cidades["data"]);
        })();
       

    }, [])

    useEffect(() => {
        console.log("a")
    },[estado])
    

    return(
    <div className='flex flex-col'>
    
        <Header />

        <div className="w-full h-auto flex place-content-center mt-10">
            <div className="w-10/12 bg-zinc-800 rounded-s pt-16 px-28 pb-16 border-red-800 border-2">
                <text className="text-zinc-200 font-bold text-5xl">
                    Preencher Cadastro
                </text>
                
                <form onSubmit={handleCreateCad} className="">
                    <div className="grid grid-cols-2 mt-14 text-zinc-200 text-xl">
                        <div className="flex flex-col pr-5 pb-5">
                            <label htmlFor='nomeCompleto' className='font-bold pb-2'>Nome Completo:</label>
                            <Input className="h-96" name='nomeCompleto' id='nomeCompleto' placeholder='José da Silva'></Input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='email' className='font-bold pb-2'>Email:</label>
                            <Input name='email' id='email' placeholder='exemplo@gmail.com'></Input>
                        </div>

                        <div className='flex flex-col pr-5 pb-5'>
                            <label htmlFor='password' className='font-bold pb-2'>Senha:</label>
                            <Input name='password' id='password' placeholder='********'></Input>
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

                        <div className="flex flex-col pr-5">              {/*Input para o Estado*/}
                            <label htmlFor='tipo' className='font-bold pb-2'>Estado:</label>
                            <Form.Select onChange={handleEstado} name="estado" aria-label="Selecione o estado" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                                <option disabled={true} >Selecione:</option>
                                {estado?.map(cada => {
                                    return(<option value={cada.sigla}>
                                                {cada.sigla}
                                            </option>)
                                    
                                    })}

                                                                

                            </Form.Select>
                        </div>

                        <div className="flex flex-col">              {/*Input para O Municipio*/}
                            <label htmlFor='tipo' className='font-bold pb-2'>Cidade:</label>
                            <Form.Select name="tipo" aria-label="Selecione o estado" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                                <option disabled={true} >Selecione:</option>
                                {municipio?.map(cada => {
                                    return(<option value={cada.nome}>{cada.nome}</option>)
                                    
                                    })}

                                                                

                            </Form.Select>
                        </div>

                        <div className='flex flex-col pr-5 pb-16'>
                            <label htmlFor='contato' className='font-bold pb-2'>Contato:</label>
                            <Input name='contato' id='contato' placeholder='(64) 99999-8888'></Input>
                        </div>

                        
                    </div>

                    <div className="flex flex-row-reverse">
                        <SubmitButton type="submit">
                            <CheckSquare size={32} />
                            Realizar Cadastro
                        </SubmitButton>

                    </div>
                                        
                </form>
            </div>
            
        </div>


        <Footer />


    </div>
)}