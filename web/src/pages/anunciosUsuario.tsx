import axios from "axios";
import React, { useState, FormEvent, useEffect } from "react";
import { Footer } from "../components/forms/footer";
import { Header } from "../components/forms/header";
import { Input } from "../components/forms/Input";
import { copiarArray } from "../components/utils/copiarArray";
import { Form } from 'react-bootstrap';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { MagnifyingGlass, Plus } from "phosphor-react";

import { DesenharLinha } from "../components/utils/desenharLinha";

import { SubmitButton } from "../components/forms/submitButton" ;
import { ListaAnunciosUsuario } from "../components/forms/ListaAnunciosUsuario";
import { Link } from "react-router-dom";

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

interface Estado{
  id: string,
  sigla: string,
  nome: string,
}

interface Municipio{
  id: string,
  nome: string,
}



let tipoInput: string = "Todos";
let calibreInput: string = "Todos";
let marcaInput: string = "Todas";
let modeloInput: string = "";
let registroInput: string = "Ambos";
let cidadeInput: string = "Todas";
let estadoInput: string = "Todos";



export default () => {


  /*----------------------------INICIO Pegar Opções para os Selects do BD ----------------------------------------*/
  const [infos, setInfos] = useState<Infos[]>([]);
  const [filtro, setFiltro] = useState(0);
  const [estado, setEstado] = useState<Estado[]>();
  const [municipio, setMunicipio] = useState<Municipio[]>();


  useEffect(() => { //DESTA FORMA O USEEFFECT

    async function getInfos () {
      await fetch('http://localhost:3334/infosnovoanuncio') //EXECUTA APENAS 1 X
        .then(response => response.json())
        .then(data => {                                                           //PEGA NO BD AS OPCOES PARA PREENCHER OS SELECTS
            setInfos(data)

      })
    }

    getInfos()
  }, [])




  async function handleEstado(event: FormEvent){
    //@ts-ignore
    let siglaBusca = event.target.value;

    estadoInput = siglaBusca;

    let idBusca: any = estado?.find(e => e.sigla == siglaBusca)

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
        <div className="flex flex-row mt-20">

          <div>
            <div className="ml-11 bg-zinc-800 flex-col text-zinc-200 px-14 py-10">
              <div className="text-zinc-200 font-bold text-5xl">
                <text>Filtros</text>
              </div>

              <DesenharLinha cor="rgb(127,29,29)" tamanho="2px"/>

              <div className="flex flex-col pb-5 pt-8">              {/*Input para o Tipo de Armamento*/}
                <label htmlFor='tipo' className='font-bold pb-2'>Tipo do Armamento:</label>
                <Form.Select onChange={(event) => {tipoInput = event.target.value}} name="tipo" aria-label="Selecione o tipo do armamento" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                    <option disabled={true} >Selecione:</option>
                    <option value="Todos">Todos</option>
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
                  <Form.Select onChange={(event) => {calibreInput = event.target.value}} name="calibre" aria-label="Selecione o calibre" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                      <option disabled={true} >Selecione:</option>
                      <option value="Todos">Todos</option>
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
                  <Form.Select onChange={(event) => {marcaInput = event.target.value}} name="marca" aria-label="Selecione a marca" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                      <option disabled={true} >Selecione:</option>
                      <option value="Todas">Todas</option>
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
                  <Input onChange={(event) => {modeloInput = event.target.value}} name='modelo' id='modelo' placeholder='Todos'></Input>
              </div>

              <div className="flex flex-col col-span-2 pb-5">              {/*Radio Group do Sistema de Registro*/}
                  <label htmlFor='modelo' className='font-bold pb-2'>Sistema de Registro:</label>

                  <div className="flex pt-3 pb-5">

                      <RadioGroup.Root defaultValue="Ambos" onValueChange={value => {registroInput = value}} name="sistemaRegistro" className="text-zinc-200 text-lg flex flex-row">

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

                              <RadioGroup.Item value="Ambos" className="bg-zinc-900 rounded-full w-9 h-9 hover:border-2 hover:border-red-900 
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
                  <label htmlFor='estado' className='font-bold pb-2'>Estado:</label>
                  <Form.Select onChange={handleEstado} name="estado" aria-label="Selecione o estado" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                              <option disabled={true} >Selecione:</option>
                              <option value="Todos">Todos</option>
                              {estado?.map(cada => {
                                  return(<option value={cada.sigla}>
                                              {cada.sigla}
                                          </option>)
                                  
                                  })}

                                                              

                          </Form.Select>
              </div>

              <div className='flex flex-col pb-8'>
                  <label htmlFor='cidade' className='font-bold pb-2'>Cidade:</label>
                  <Form.Select onChange={(event) => {cidadeInput = event.target.value}} name="tipo" aria-label="Selecione a cidade" className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none">
                              <option disabled={true} >Selecione:</option>
                              <option value="Todas">Todas</option>
                              {municipio?.map(cada => {
                                  return(<option value={cada.nome}>{cada.nome}</option>)
                                  
                                  })}

                                                              

                          </Form.Select>
              </div>

              <div className="flex flex-row-reverse">
                  <SubmitButton  onClick={e => {setFiltro(filtro+1)}}>
                    <MagnifyingGlass size={28} />
                    Filtrar
                  </SubmitButton>

              </div>

            </div>
          </div>

          <div className="w-full mr-11 ml-9 flex flex-col">
              <div className="flex pb-5">
                <Link to="/novoanuncio">
                  <SubmitButton>
                      <Plus size={28} />
                      Novo Anúncio
                  </SubmitButton>
                </Link>
              </div>

              <ListaAnunciosUsuario tipo={tipoInput} calibre={calibreInput} marca={marcaInput} modelo={modeloInput} registro={registroInput} cidade={cidadeInput} estado={estadoInput} />
          </div>


        </div>
        </body>

        <Footer />

      </div>
    

    )
}

