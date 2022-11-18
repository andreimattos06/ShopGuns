import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Footer } from "../components/forms/footer";
import { Header } from "../components/forms/header";
  

export default () => {

  const [teste, setTeste] = useState();

  useEffect(() => {

    async function receba(){

      const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/distritos");
      console.log(response["data"].map(cada => {
        console.log(cada.nome)
      }));
    }

    receba();

    
    
  }, []);

  
  return(

    <div>

      <header>
        <Header />
      </header>  

      <body>

      </body>

      <Footer />

    </div>
    
)}