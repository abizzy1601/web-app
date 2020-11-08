import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjTwo} from './Data'
import Pricing from '../../Pricing'

function Services() {
    return (
        <>
            {/* <HeroSection {...homeObjOne} /> */}
            <HeroSection {...homeObjTwo} />
            {/* <HeroSection {...homeObjThree} /> */} 
            <Pricing />
            {/* <HeroSection {...homeObjFour} /> */}
        </>
    )
}

export default Services;
