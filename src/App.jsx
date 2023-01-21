import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/container/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/container/ItemDetailContainer/ItemDetailContainer';

function App() {
 return(
  <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
      
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App
