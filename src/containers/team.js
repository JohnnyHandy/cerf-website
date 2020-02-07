import React from 'react'
import { Container,Upper,Lower, Middle } from './styles/teamstyles'

const Team = () => {
    return(
         <Container>
             <Upper/>
             <Lower/>
             <Middle>
                <div className='image-container'></div>
                <div className='image-container'></div>
                <div className='image-container'></div>
                <div className='image-container'></div>
             </Middle>
         </Container>
    )
}

export default Team