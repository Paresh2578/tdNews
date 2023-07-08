import React from 'react'
import './Spinner.css';


const  Spinner =  ()=>{
    return (
      <div>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        {/* <div className="loader">Loading...</div> */}
        {/* <img src={lodding} style={{position:'absolute' , alignItems:'center' , justifyContent:'center' , paddingLeft:'50%'}}></img> */}
      </div>
    )
}


export default Spinner