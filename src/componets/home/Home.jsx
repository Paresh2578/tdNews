import React from "react";

//componest
import NewsCategory from '../news-categroy/NewsCategory'
import News from "../News";

//mui
import { Box } from "@mui/material";

const Home = ({setProgress ,key ,   category , country})=>{
    return(
        <Box style={{marginTop:'10vh'}}>
        <NewsCategory/>
        <Box style={{marginTop:'-70px'}}>
           <News setProgress={setProgress} key={key} category={category} country={country}  />
        </Box>
        </Box>
    )
}

export default Home;