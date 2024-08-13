import './App.css'

import { useRef, useState, useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const ScrollPositionHandler = () => {
    setScrollPosition(window.scrollY)
}
useEffect(() => {
    window.addEventListener('scroll', ScrollPositionHandler);
    return () => {
        window.removeEventListener('scroll', ScrollPositionHandler);
    };
}, [])


  return (
    <>
    <BrowserRouter>
    <Header scrollPosition={scrollPosition}></Header>
    <Routes>
      <Route path='/' element={<Home scrollPosition={scrollPosition}></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
     </>
  )
}

export default App
