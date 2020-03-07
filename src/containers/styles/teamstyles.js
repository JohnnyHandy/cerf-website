import styled from 'styled-components'

export const Container = styled.div`
align-items: center;
display: flex;
flex-direction:column;
height: 33rem;
justify-content: center;
position: absolute;
top:34rem;
width: 100%;
`

export const Upper = styled.div`
background: rgb(0,37,90);
background: linear-gradient(180deg, rgba(0,37,90,1) 61%, rgba(255,255,255,1) 88%);
height:16.5rem;
width:100%
`
export const Lower = styled.div`
background:#ffffff;
height:16.5rem;
width:100%
`

export const Middle = styled.div`
display: flex;
height: 16rem;
justify-content:space-around;
position: absolute;
width: 70%;
`

export const ImageContainer = styled.div`
height: 80%;
align-self: center;
width: 22%;
`

export const Image = styled.img`
height: 100%;
width: 100%;
`