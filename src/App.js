import React ,{ Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/navbar";
import Index from "./components/Index/index";
import Contact from "./components/Contact/Contact"

class App extends Component{
  render(){
    return (
      <BrowserRouter basename="/React-Proj">
          <div className="App">
            <Navbar />
              <Routes>
                <Route exact path ="/" element={<Index/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
          </div>
      </BrowserRouter>
    )
  }
 
}

export default App;
