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

{/**  
      <header>
        <Header />
      </header>  

      <body>
        <div className='mt-96 mx-10 bg-zinc-700 rounded-md text-zinc-200'>
          <div className='text-lg'>
          LOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUMLOREM IPSEUM
          </div>
        </div>
      </body>
  */}

    </div>
    )
}

export default App
