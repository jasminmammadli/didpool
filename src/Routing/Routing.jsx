import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Features from '../components/pages/Features'
import Pricing from '../components/pages/Pricing'
import SignIn from '../components/pages/SignIn'
import SignUp from '../components/pages/SignUp'
import OurBlog from '../components/pages/OurBlog'
import Products from '../components/pages/Products'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/our-blog' element={<OurBlog/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routing