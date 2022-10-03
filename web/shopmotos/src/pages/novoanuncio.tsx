import React, { useEffect, useState } from "react";
import { FormEvent } from 'react';
import axios from 'axios';
import { CheckSquare } from "phosphor-react";

import { Form } from 'react-bootstrap';
import InputMask from "react";

import * as RadioGroup from '@radix-ui/react-radio-group';

import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { DesenharLinha } from "../components/utils/desenharLinha";
import { copiarArray } from "../components/utils/copiarArray";
import ReactInputMask from "react-input-mask";
import { Footer } from "../components/forms/footer";



interface Infos {
    objeto: any;
}

interface Marca {
    nome: any;
}

interface Calibre {
    nome: any;
}

interface TipoArma {
    objeto: any[];
}

async function handleCreateAnuncio(event: FormEvent) {

    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
        await axios.post('http://localhost:3334/novoanuncio', {

            cadastroCpf: data.cadastroCpf,
            tipo: data.tipo,
            calibre: data.calibre,
            marca: data.marca,
            modelo: data.modelo,
            valor: data.valor,
            descricao: data.descricao,
            cidade: data.cidade,
            estado: data.estado,
            sistemaRegistro: data.sistemaRegistro,
            envio: data.envio,

        })

        alert('Anúncio Criado com Sucesso!')

    }catch(err){
        alert('Ocorreu um erro na criacao do anuncio'),
        console.log('Erro ao criar o anuncio')
    }

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

    const marcas = copiarArray(infos.slice(0, 1));                                                     //VARIAVEIS PARA OS SELECTS
    const tipos = copiarArray(infos.slice(1, 2));
    const calibres = copiarArray(infos.slice(2, 3));



    /*----------------------------FIM Pegar Opções para os Selects do BD ----------------------------------------*/


    return (


        <div className='flex flex-col'>

            <Header />

            <div className="w-full h-auto flex place-content-center mt-10">
                <div className="w-10/12 bg-zinc-800 rounded-s pt-16 px-28 pb-16 border-red-800 border-2">
                    <text className="text-zinc-200 font-bold text-5xl">
                        Dados do Armamento
                    </text>

                    <form onSubmit={handleCreateAnuncio} className="">
                        <div className="grid grid-cols-2 mt-14 text-zinc-200 text-xl">
                            <div className="flex flex-col pr-5 pb-5">              {/*Input para o Tipo de Armamento*/}
                                <label htmlFor='tipo' className='font-bold pb-2'>Tipo do Armamento:</label>
                                <Form.Select name="tipo" aria-label="Selecione o tipo do armamento" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                                    <option disabled={true} >Selecione:</option>
                                    {tipos.map(tipo => {
                                        return (
                                            <option value={tipo}>
                                                {tipo}
                                            </option>
                                        )
                                    })}

                                </Form.Select>
                            </div>

                            <div className='flex flex-col'>                        {/*Input para o Calibre*/}
                                <label htmlFor='calibre' className='font-bold pb-2'>Calibre:</label>
                                <Form.Select name="calibre" aria-label="Selecione o calibre" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                                    <option disabled={true} >Selecione:</option>
                                    {calibres.map(calibre => {
                                        return (
                                            <option value={calibre}>
                                                {calibre}
                                            </option>
                                        )
                                    })}

                                </Form.Select>
                            </div>

                            <div className='flex flex-col pr-5 pb-5'>             {/*Input para a Marca*/}
                                <label htmlFor='marca' className='font-bold pb-2'>Marca:</label>
                                <Form.Select name="marca" aria-label="Selecione a marca" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                                    <option disabled={true} >Selecione:</option>
                                    {marcas.map(marca => {
                                        return (
                                            <option value={marca}>
                                                {marca}
                                            </option>

                                        )

                                    })}

                                </Form.Select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='modelo' className='font-bold pb-2'>Modelo:</label>
                                <Input name='modelo' id='modelo' placeholder='111.222.333-44'></Input>
                            </div>

                            <div className="flex flex-col col-span-2">              {/*Radio Group do Sistema de Registro*/}
                                <label htmlFor='modelo' className='font-bold pb-2'>Sistema de Registro:</label>

                                <div className="flex pt-3 pb-5">

                                    <RadioGroup.Root name="sistemaRegistro" className="text-zinc-200 text-lg flex flex-row">

                                        <div className="gap-3 flex flex-row pr-8">

                                            <RadioGroup.Item value="sigma" className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
                                                                        focus:border-2 focus:border-red-900">

                                                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full relative
                                                                        after:bg-red-900 after:h-4 after:w-4 after:rounded-full after:block"/>

                                            </RadioGroup.Item>
                                            <label htmlFor='sigma' className='font-bold items-center'>SIGMA</label>

                                        </div>

                                        <div className="gap-3 flex pr-8">

                                            <RadioGroup.Item value="sinarm" className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
                                                                        focus:border-2 focus:border-red-900">

                                                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full relative
                                                                        after:bg-red-900 after:h-4 after:w-4 after:rounded-full after:block"/>

                                            </RadioGroup.Item>
                                            <label htmlFor='sinarm' className='font-bold items-center'>SINARM</label>

                                        </div>

                                        <div className="gap-3 flex">

                                            <RadioGroup.Item value="outro" className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
                                                                        focus:border-2 focus:border-red-900">

                                                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full relative
                                                                        after:bg-red-900 after:h-4 after:w-4 after:rounded-full after:block"/>

                                            </RadioGroup.Item>
                                            <label htmlFor='outro' className='font-bold items-center'>Outro</label>

                                        </div>



                                    </RadioGroup.Root>

                                </div>

                            </div>

                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='valor' className='font-bold pb-2'>Valor:</label>
                                <div>
                                    <span className='rounded-l border-t-2 border-b-2 border-l-2 border-r-[1px] border-red-900 bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 focus:outline-none'>R$</span>
                                    <ReactInputMask mask="99999,99" className='border-t-2 border-b-2 border-r-2 border-red-900 rounded-r bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 focus:outline-none' name='valor' id='valor' placeholder='1,00'>
                                    </ReactInputMask>
                                </div>

                            </div>

                            <div></div>                     {/* Div Vazio apenas para ajuste de interface*/}


                            <div className="col-span-2 py-16">                 {/* Desenho da Linha */}

                                <DesenharLinha cor="rgb(127,29,29)" tamanho="2px">
                                </DesenharLinha>
                            </div>

                            <div className="col-span-2 pb-16">                      {/* Div Dados do Endereço */}
                                <text className="text-zinc-200 font-bold text-5xl">
                                    Dados do Endereço
                                </text>
                            </div>


                            <div className='flex flex-col pr-5 pb-5'>
                                <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                                <Input name='cidade' id='cidade' placeholder='Caldas Novas'></Input>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                                <Input name='estado' id='estado' placeholder='Goiás'></Input>
                            </div>


                            <div className="flex flex-col col-span-2 pt-8">              {/*Radio Group do Envio ou Retirada*/}
                                <label htmlFor='modelo' className='font-bold pb-2'>Realiza Envio:</label>

                                <div className="flex pt-3 pb-5">

                                    <RadioGroup.Root name="envio" className="text-zinc-200 text-lg flex flex-row">

                                        <div className="gap-3 flex flex-row pr-8">

                                            <RadioGroup.Item value='true' className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
                                                                        focus:border-2 focus:border-red-900">

                                                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full relative
                                                                        after:bg-red-900 after:h-4 after:w-4 after:rounded-full after:block"/>

                                            </RadioGroup.Item>
                                            <label htmlFor='envio' className='font-bold items-center'>Sim</label>

                                        </div>

                                        <div className="gap-3 flex pr-8">

                                            <RadioGroup.Item value='false' className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
                                                                        focus:border-2 focus:border-red-900">

                                                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full relative
                                                                        after:bg-red-900 after:h-4 after:w-4 after:rounded-full after:block"/>

                                            </RadioGroup.Item>
                                            <label htmlFor='envio' className='font-bold items-center'>Não</label>

                                        </div>

                                    </RadioGroup.Root>

                                </div>

                            </div>


                            <div className="col-span-2 py-16">                 {/* Desenho da Linha */}

                                <DesenharLinha cor="rgb(127,29,29)" tamanho="2px">
                                </DesenharLinha>
                            </div>

                            <div className='flex flex-col col-span-2 pb-16 min-h-[300px]'>
                                <label htmlFor='descricao' className='font-bold pb-2'>Descrição Adicional:</label>
                                <textarea className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none w-full h-full' name='descricao' id='descricao' placeholder=''></textarea>
                            </div>


                        </div>

                        <div className="flex flex-row-reverse">
                            <button type="submit" className="flex text-bold text-xl bg-red-800 rounded-md px-4 py-2 gap-2 hover:text-zinc-900 text-zinc-200">
                                <CheckSquare size={32} />
                                Realizar Cadastro
                            </button>

                        </div>

                        <div>
                            <label>CadastroCPF</label>
                            <Input name='cadastroCpf' id='cadastroCpf' placeholder='Goiás'></Input>
                        </div>


                    </form>
                </div>

            </div>


            <Footer />

        </div>


    );
}

