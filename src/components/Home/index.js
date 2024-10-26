import React from 'react'
import HeroBanner from '../HeroBanner'
import NewDeals from '../NewDeals'
import CategoryGrid from '../CategoryGrid'
import Footer from "../Footer"
const Home = () => {
  return (
    <div>
        <HeroBanner />
         <NewDeals/>
         <CategoryGrid/>
         <Footer/>
    </div>
  )
}

export default Home
