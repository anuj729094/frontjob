import React, { useEffect } from 'react'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import Hired from '../components/Hired'
import Offer from '../components/Offer'
import Openings from '../components/Openings'
import Scrolling from '../components/Scrolling'
import Testimonals from '../components/Testimonals'

const Home = () => {
   
    return (
        <div>
            <Hero />
            {/* <Scrolling /> */}
            <Hired />
            <Explore />
            <Openings />
            <Offer />
            {/* <Testimonals /> */}
        </div>
    )
}

export default Home
