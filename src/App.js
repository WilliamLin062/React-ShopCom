import React from 'react'
import logo from './logo.svg'
import './App.css'
import ProgressBar from './component/ProgressBar'
import Home from './view/Home'
import ShopTop from './view/ShopTop'
import Footer from './view/Footer'

function App() {
  return (
    <div className="App">
      <ProgressBar></ProgressBar>
      <ShopTop></ShopTop>
      <Home></Home>

      <Footer></Footer>

      <div className="home-wrapper"> </div>
    </div>
  )
}

export default App
