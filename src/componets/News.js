import React, {useState, useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
// import Lodding {Component} from './lodding.gif'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { render } from '@testing-library/react';

//mui
import {Box ,styled} from '@mui/material'



const NewsBox = styled(Box)(({theme})=>({
     "@media (max-width:769px)" : {
      marginLeft : '20%'
     },
     "@media (max-width:490px)" : {
      marginLeft : '10%'
     },
     "@media (max-width:385px)" : {
      marginLeft : '5%'
     },
     "@media (max-width:360px)" : {
      marginLeft : '1%'
     },
     "@media (max-width:305px)" : {
      marginLeft : '-1%'
     }
}))


const  News = (props)=> {

 const [articles , setArticles] = useState([]);
 const [lodding , setLodding] = useState(true);
 const [page , setPage] = useState(1);
 const [totalResult , setTotalResult] = useState(0);

     document.title = props.category.charAt(0).toUpperCase() + props.category.split(1) + "  || T-News";

 

  const UpdateNews = async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2353a22338084378afe64616af996fe0`;
    setLodding(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parseData = await data.json();
    props.setProgress(70)
   
    setArticles(parseData.articles);
    setTotalResult(parseData .totalResult);
    setLodding(false);

    props.setProgress(100)
  }

useEffect(() => {
 setTimeout(()=>{
  UpdateNews();
 }, 1500)
},[]);



   return (
      <>
      {
        !lodding ? 
        <div style={{marginTop:'90px'}}>
        <div className="container mt-5" >
        <div className="row mt-3" >
            <h1 className="mb-3 text-center">T - News {props.category} Headlines</h1>
         {lodding && <Spinner/>}

        
          <div className='container'>
            <div className='row'>

            { articles && articles.map((element) => {
              return <NewsBox className="col mb-3" key={element.url}>
                <NewsItem  title={element.title} imgUrl={element.urlToImage} description={element.title} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
              </NewsBox>
            })}
            </div>
          </div>
         
          </div>
        </div>

      </div> :
      <Spinner/>
      }
      </>
    )
      }
    

News.defaultProps = {
  category: 'general',
  country: 'in',
  pageSize: '10'
}

News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
}

export default News
