import React from 'react'
import { Link } from 'react-router-dom'
//mui
import { Box , styled } from '@mui/material'

const Main_box = styled(Box)(({theme})=>({
    margin:'0px',
    marginTop:'5rem',
    display:'flex',
    overflowX:'scroll',
    background:'#ffff',
    "::-webkit-scrollbar" : {
        display: 'none',
    },
   
}))

const Category = styled(Link)(({theme})=>({
    margin:'1rem 1rem',
    borderRadius:'10%',
    "img":{
        borderRadius:'10%',
        heigth:'50px',
    },
     "@media (max-width:640px)" : {
        "img":{
            width:'160px',
        },
    },
    ":hover":{
        transform: 'scale(1.1,1.1)',
        transition: '.3s transform',
       boxShadow: '5px 10px 18px #888888'
    },
    borderRadius:'2px',
   
}))

const NewsCategory = ()=>{
    return(
        <Main_box >
            <Category  to={'entertainment'}>
                <img src='imgs/entertainment.jpg'/>
            </Category>
            <Category  to={'health'}>
                <img src='imgs/health.jpg'/>
            </Category>
            <Category  to={'science'}>
                <img src='imgs/science.jpg'/>
            </Category>
            <Category  to={'technology'}>
                <img src='imgs/technology.jpg'/>
            </Category>
            <Category  to={'sports'}>
                <img src='imgs/sports.jpg'/>
            </Category>
            <Category to={'business'}>
                <img src='imgs/business.jpg'/>
            </Category>
        </Main_box>
    )
}

export default NewsCategory