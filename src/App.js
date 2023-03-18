
import React, { useContext,useState,Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Featured from "./pages/featured";



import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <Router>
           <div className="App">
        
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/featured' element={< Featured />}></Route>
                
          </Routes> 
          </div>
       </Router>
    </div>
  );
}

export default App;
