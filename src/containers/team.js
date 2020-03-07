import React from 'react'
import { Container,Upper,Lower, Middle, ImageContainer, Image } from './styles/teamstyles'
import  Test  from '../assets/mago.jpeg'

const Team = () => {
    return(
         <Container>
             <Upper>
             <h2 style={{color:'white'}}>Nossos Membros</h2>
             </Upper>
             <Lower/>
             <Middle>
                <ImageContainer>
                    <Image className='image' src={Test} alt='test' />
                    <h4 style ={{color:'rgb(0,37,90)', margin: '0'}}>Mago</h4>
                    <p style ={{color:'rgb(0,37,90)', margin: '0'}}>Analista de Projetos</p>
                </ImageContainer>
                <ImageContainer>
                    <Image className='image' src={Test} alt='test' />
                    <h4 style ={{color:'rgb(0,37,90)', margin: '0'}}>Mago</h4>
                    <p style ={{color:'rgb(0,37,90)', margin: '0'}}>Analista de Projetos</p>
                </ImageContainer>
                <ImageContainer>
                    <Image className='image' src={Test} alt='test' />
                    <h4 style ={{color:'rgb(0,37,90)', margin: '0'}}>Mago</h4>
                    <p style ={{color:'rgb(0,37,90)', margin: '0'}}>Analista de Projetos</p>
                </ImageContainer>
                <ImageContainer>
                    <Image className='image' src={Test} alt='test' />
                    <h4 style ={{color:'rgb(0,37,90)', margin: '0'}}>Mago</h4>
                    <p style ={{color:'rgb(0,37,90)', margin: '0'}}>Analista de Projetos</p>
                </ImageContainer>
             </Middle>
         </Container>
    )
}

export default Team