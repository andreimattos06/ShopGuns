import { Target, SignIn, UserPlus } from 'phosphor-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import avatarPadrao from '/avatar.png'
import { Input } from './components/forms/Input';
import { Header } from './components/forms/header';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Novoanuncio from './pages/novoanuncio';
import { useEffect, useState } from 'react';
import Anuncios from './pages/anuncios';
import { Detalhesanuncio } from './pages/Detalhesanuncio';
import AnunciosUsuario from './pages/anunciosUsuario';
import CadastroUsuario from './pages/cadastroUsuario';
import { DetalhesAnuncioUsuario } from './pages/detalhesAnuncioUsuario';



function App() {


  return(

    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anuncios' element={<Anuncios />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/novoanuncio' element={<Novoanuncio />} />
          <Route path='/anuncios/:id' element={<Detalhesanuncio />} />
          <Route path='/anunciosusuario/:id' element={<DetalhesAnuncioUsuario />} />
          <Route path='/anunciosusuario' element={<AnunciosUsuario />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        </Routes>

      </BrowserRouter>



    </div>
    )
}

export default App
