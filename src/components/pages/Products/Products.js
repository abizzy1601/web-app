import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data'
import Pricing from '../../Pricing'

function Products() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            {/* <HeroSection {...homeObjTwo} /> */}
            {/* <HeroSection {...homeObjThree} /> */}
            <Pricing />
            {/* <HeroSection {...homeObjFour} /> */}
        </>
    )
}

export default Products;
