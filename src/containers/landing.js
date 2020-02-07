import React from 'react'

const landing = (props)=>{
    return(
        <div className='landing-container'>
            <img className='landing-background' src={require('../assets/Fundo2.jpg')} alt='background'/>
            <div className='carousel-container'>
                <img className='carousel-logo-image' src={require('../assets/Cerf-White.png')} alt='Cerf'/>
            </div>
        </div>
    )
}

export default landing