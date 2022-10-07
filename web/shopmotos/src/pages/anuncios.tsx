import axios from "axios";
import React, { useState, FormEvent, useEffect } from "react";
import { Footer } from "../components/forms/footer";
import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { copiarArray } from "../components/utils/copiarArray";
import { Form } from 'react-bootstrap';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { MagnifyingGlass } from "phosphor-react";

import { DesenharLinha } from "../components/utils/desenharLinha";

import { SubmitButton } from "../components/forms/submitButton" ;
import { ListaAnuncios } from "../components/forms/ListaAnuncios";

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

  return(


      <div>

        <header>
          <Header />
        </header>  

        <body>
          <div className="flex flex-row mt-32">

            <div>
              <div className="ml-11 bg-zinc-800 flex-col text-zinc-200 px-14 py-10">
                <div className="text-zinc-200 font-bold text-5xl">
                  <text>Filtros</text>
                </div>

                <DesenharLinha cor="rgb(127,29,29)" tamanho="2px"/>

                <div className="flex flex-col pb-5 pt-8">              {/*Input para o Tipo de Armamento*/}
                  <label htmlFor='tipo' className='font-bold pb-2'>Tipo do Armamento:</label>
                  <Form.Select name="tipo" aria-label="Selecione o tipo do armamento" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                      <option disabled={true} >Selecione:</option>
                      <option>Todos</option>
                      {tipos.map(tipo => {
                          return (
                              <option value={tipo}>
                                  {tipo}
                              </option>
                          )
                      })}

                  </Form.Select>
                </div>

                <div className='flex flex-col pb-5'>                        {/*Input para o Calibre*/}
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

                <div className='flex flex-col pb-5'>             {/*Input para a Marca*/}
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

                <div className='flex flex-col pb-5'>
                    <label htmlFor='modelo' className='font-bold pb-2'>Modelo:</label>
                    <Input name='modelo' id='modelo' placeholder='111.222.333-44'></Input>
                </div>

                <div className="flex flex-col col-span-2 pb-5">              {/*Radio Group do Sistema de Registro*/}
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
                                <label htmlFor='outro' className='font-bold items-center'>Ambos</label>

                            </div>



                        </RadioGroup.Root>

                    </div>

                </div>

                <div className='flex flex-col pb-5'>
                    <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                    <Input name='cidade' id='cidade' placeholder='Caldas Novas'></Input>
                </div>

                <div className='flex flex-col pb-8'>
                    <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                    <Input name='estado' id='estado' placeholder='Goiás'></Input>
                </div>

                <div className="flex flex-row-reverse">
                    <SubmitButton type="submit">
                      <MagnifyingGlass size={28} />
                      Filtrar
                    </SubmitButton>

                </div>

              </div>
            </div>


            <div className="w-full mr-11 ml-9">
              <ListaAnuncios />
              <ListaAnuncios />
            </div>


          </div>
        </body>

        <Footer />

      </div>
    

    )
}

