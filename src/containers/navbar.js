import React from 'react'

const navbar = (props)=>{
    return(
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img className='navbar-logo-image' src={require('../assets/idcerf.png')} alt='Cerf'/>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-menu-item'>Inicio</div>
                <div className='navbar-menu-item'>Serviços</div>
                <div className='navbar-menu-item'>Sobre Nós</div>
                <div className='navbar-menu-item'>Contato</div>
            </div>
            <div className='navbar-social'>
                <div><i className="fab fa-facebook-f navbar-social-item"></i></div>
                <div><i class="fab fa-linkedin-in navbar-social-item"></i></div>
                <div><i class="fab fa-instagram navbar-social-item"></i></div>
            </div>
        </div>
    )
}

export default navbar