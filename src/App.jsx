import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './assets/components/Layout/Layout'
import Home from './assets/components/Pages/Home/Home'
import Products from './assets/components/Pages/Products/Products'
import Contact from './assets/components/Pages/Contact/Contact'
import Error from './assets/components/Pages/Error/Error'
import About from "./assets/components/Pages/About/About"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
