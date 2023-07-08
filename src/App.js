import './App.css';
import { GiTopHat } from "react-icons/fa";

import React, { useState} from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import Top_scorl  from './componets/Top_scorl';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  // Link,
  // NavLink,
  Routes
} from "react-router-dom";

//componets
import Home from './componets/home/Home';

const App =()=> {
 

  const [progress , setProgressing] = useState(0);

 const setProgress = (progress)=>{
    setProgressing(progress);
  }
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />

          <Navbar />

          <div className=" mt-4">
            <Routes>
              <Route exact path="/" element={<Home setProgress={setProgress} key={"general"} category='general' country='in' />}></Route>
              <Route exact path="/business"  element={<News setProgress={setProgress} key={"business"} category='business' country='in'  />}> </Route>
              <Route exact path="/entertainment" element={<News setProgress={setProgress}  kry={"entertainment"} category='entertainment' country='in'  />}></Route>
              <Route exact path="/health" element={<News setProgress={setProgress} key={"health"} category='health' country='in' /> }></Route>
              <Route exact path="/science" element={<News setProgress={setProgress} key={"science"} category='science' country='in'  /> }></Route>
              <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports"} category='sports' country='in' />}> </Route>
              <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} category='technology' country='in'  />}> </Route>
              <Route exact path="/general" element={<News setProgress={setProgress} key={"general"} category='general' country='in'  />}> </Route>
            </Routes>
          </div>


        </Router>
        <Top_scorl/>
      </div>
    )
}



export default App