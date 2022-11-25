import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import TopRow from './TopRow';
import Login from "./Login";
import Signup from './Signup';


function App(){
    return(
        <Router>
            <div>
            <Routes>
                <Route path = "/" element={<TopRow />}></Route>
                <Route path = "/Login" element = {<Login />}></Route>
                <Route path = "/Signup" element = {<Signup />}></Route>
            </Routes>
        
            </div>
         </Router>
        
    );
}

export default App;