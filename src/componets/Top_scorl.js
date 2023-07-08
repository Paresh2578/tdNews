/* eslint-disable react/jsx-no-undef */
import React , {useState ,useEffect} from 'react'
import { FaArrowUp } from "react-icons/fa";

const Top_scorl = () => {
  const [visible , NotVisible] = useState(false);

  const listenTScroll = ()=>{
    const winScrol = document.body.scrollTop || document.documentElement.scrollTop;
    //   console.log(winScrol)


    if(winScrol >=150 ){
        NotVisible(true);
    }else{
        NotVisible(false);
    }
  }

  useEffect(()=>{
     window.addEventListener('scroll' , listenTScroll);
     return  ()=> window.addEventListener('scroll' , listenTScroll)
  }, [])

    const top_scorl_function = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <div>
            {visible && (<div id='topBar' className='btn  btn-primary fixed-bottom   mt-5 ms-3 mb-2' onClick={top_scorl_function} style={{ width: '45px', height: '40px' ,alignItems:'center' ,justifyContent:'center'}}><FaArrowUp />
                {/* <div class = "btn btn-success fixed-bottom mt-5 ms-3" style={{ width: '50px', height: '50px' }}><FaBeer /></div> */}
            </div>)}
    </div>
    )
}

export default Top_scorl
