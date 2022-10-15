import React ,{ Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/navbar";
import Index from "./components/Index/index";
import Contact from "./components/Contact/Contact"

class App extends Component{
  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <BrowserRouter basename={Window.location.pathname || ''}>
              <Routes>
                <Route exact path ="/" element={<Index/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </BrowserRouter>
          </div>
      </BrowserRouter>
    )
  }
 
}

export default App;
