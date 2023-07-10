import React from 'react'
import Header from '../components/partials/Header/Header'
import Footer from '../components/partials/Footer/Footer'


const Default = ({ children }) => {
  return (
    <>
        <Header />
        <main className='main-container'>
        { children }
        </main>
        <Footer />
    </>
  )
}

export default Default