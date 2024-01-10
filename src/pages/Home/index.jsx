import React from 'react'
import Header from '../../components/Header'
import Fetchsection from '../../components/Fetchsection/inex'
import Ourbest from '../../components/Ourbest'

function Home() {
  return (
    <div>
        <Header/>
        <Fetchsection/>
        <Ourbest/>
    </div>
  )
}

export default Home