import React from 'react'
import Landing from './landing'
import Team from './team'


const Main = (props)=>{
    return(
        <div className='main-container'>
            <Landing/>
            <Team/>
        </div>
    )
}

export default Main