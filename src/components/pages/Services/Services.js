import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
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
