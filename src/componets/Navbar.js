import React , {useState} from 'react'
import {Link} from 'react-router-dom'


//mui
import { AppBar , IconButton, Toolbar, Drawer, ListItem  , List, Divider, Typography} from '@mui/material'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Category =styled(Link)(({theme})=>({
    margin:'0px 10px',
    fontSize:'20px',
    ":hover":{
        borderBottom:'2px solid red'
    },
    "@media (max-width:840px) ":{
        display:'none'
    }
}))

const MenuIconS = styled(IconButton)(({theme})=>({
    display:'none',
    float:'right',
    marginLeft:'auto',
    "@media (max-width:840px) ":{
        display:'block'
    }
}))

const Navbar = ()=>{

    const [open , setOpen] = useState(false);

    const handleClose = ()=>{
        setOpen(false);
    }

    const handlOpen = ()=>{
        setOpen(true)
    }

    return (
        <>
        <AppBar>
            <Toolbar>
                
                <Link className ="nav-link" aria-current="page" to="/" style={{fontWeight:'bold' , fontSize:'30px' , fontFamily:'cursive' , marginRight:'1rem'}}><span style={{color:'red'}}>T</span>News</Link>
                <Category key={"business"} className="nav-link" to="business">business</Category>
                <Category className="nav-link" to="entertainment">entertainment</Category>
                <Category className="nav-link" to="health">health</Category>
                <Category className="nav-link" to="science">science</Category>
                <Category className="nav-link" to="sports">sports</Category>
                <Category className="nav-link" to="technology">technology.</Category>

                <MenuIconS color="inherit" onClick={handlOpen}>
                    <MenuIcon/>
                </MenuIconS>
            </Toolbar>

            
          </AppBar>

        <Drawer open={open} onClose={handleClose}>
            <List>
                <ListItem>
                    <IconButton size='small' onClick={handleClose}>
                        <ArrowBackIcon/>
                    </IconButton>    
                    <Typography style={{marginLeft:'1vh'}}> categorys</Typography>
                    <Divider/>
                </ListItem>
                <ListItem><Link onClick={handleClose} key={"business"} className="nav-link" to="business">business</Link></ListItem>
                <ListItem><Link onClick={handleClose} className="nav-link" to="entertainment">entertainment</Link></ListItem>
                <ListItem><Link onClick={handleClose} className="nav-link" to="health">health</Link></ListItem>
                <ListItem><Link onClick={handleClose} className="nav-link" to="science">science</Link></ListItem>
                <ListItem><Link onClick={handleClose} className="nav-link" to="sports">sports</Link></ListItem>
                <ListItem><Link onClick={handleClose} className="nav-link" to="technology">technology.</Link></ListItem>
            </List>
        </Drawer>
        </>
    )
}

export default Navbar








// import React from 'react'
// import {Link} from 'react-router-dom';




// const  Navbar = ()=> {
//         return (
//                 <nav className ="navbar fixed-top navbar-expand-lg bg-body-tertiary" >
//                     <div className ="container-fluid">
//                         <Link className ="navbar-brand" to="/">Sky News</Link>
//                         <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className ="navbar-toggler-icon"></span>
//                         </button>
//                         <div className ="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className ="nav-item">
//                                     <Link className ="nav-link" aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className ="nav-item"><Link key={"business"} className="nav-link" to="business">business</Link></li>
//                                 <li className ="nav-item"><Link className="nav-link" to="entertainment">entertainment</Link></li>
//                                 <li className ="nav-item"><Link className="nav-link" to="health">health</Link></li>
//                                 <li className ="nav-item"><Link className="nav-link" to="science">science</Link></li>
//                                 <li className ="nav-item"><Link className="nav-link" to="sports">sports</Link></li>
//                                 <li className ="nav-item"><Link className="nav-link" to="technology">technology.</Link></li>
//                             </ul>
                           
//                         </div>
//                     </div>
//                 </nav>
//         )
// }

// export default Navbar
