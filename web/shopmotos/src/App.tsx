import { Target, SignIn, UserPlus } from 'phosphor-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import avatarPadrao from '/avatar.png'
import { Input } from './components/forms/Input';
import { Header } from './components/forms/header';

import Home from './pages/home';
import Cadastro from './pages/cadastro';

function App() {
  return(

    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>

      </BrowserRouter>



    </div>
    )
}

export default App
