import React from 'react'

//mui
import {Box , styled} from '@mui/material'

const Main_box = styled(Box)(({theme})=>({
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  width:'20rem',
  ":hover":{
    transform: 'scale(1.1,1.1)',
    transition: '.3s transform',
   boxShadow: '5px 10px 18px #888888'
  },
  "@media (max-width:350px)" : {
    width:'19rem'
  },
  "@media (max-width:320px)" : {
    width:'18rem'
  },
  "@media (max-width:300px)" : {
    width:'17rem',
    marginRigth:'10px'
  },

}))

const Cards = styled(Box)(({theme})=>({
  margin:'auto' ,
   width:'20rem',
   "@media (max-width:350px)" : {
    width:'19rem',
  } ,
   "@media (max-width:320px)" : {
    width:'18rem',
  },
   "@media (max-width:300px)" : {
    width:'17rem',
     marginRigth:'10px'
  } 
}))

const  NewsItem = (props)=>{
   
    return (
      <Main_box style={{ }}>
        <Cards className = "card">
        {/* <span className=" text-bg-success position-absolute top-0 start-75 badge rounded-pill text-bg-secondary">{name}</span> */}
          <img src={props.imgUrl} className = "card-img-top" alt="..." />
          <Box className = "card-body">
            <h5 className = "card-title">{props.title}</h5>
            <p className = "card-text">{props.description}</p>
            <p className="card-text"><small className="text-body-secondary">by {!props.author?"unkonow" : props.author} || {new Date(props.publishedAt).toGMTString()} </small></p>
            <a href={props.newsUrl} terget="_blank" className = "btn btn-primary">Read more</a>
          </Box>
        </Cards>
      </Main_box>
    )
}

export default NewsItem
