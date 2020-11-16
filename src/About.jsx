import React from 'react'
import Comman from './Comman'
import web from './images/abt.png'
function About() {
    return (
        <>
        <Comman name='welcome to About page'
         imgsrc={web}
         visit='/contact'
         btname='Contact me' />
        </>
    )
}

export default About
