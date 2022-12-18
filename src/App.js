import React from 'react';
import {Navbar, Homepage} from './component'
// import {Article} from './component/Articles/Article'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import { Layout} from 'antd';
import { Memes } from "./component/Memes/Memes.js";
import News2 from "./component/News/News2";
import Mailer from "./Mailer/Mailer";


import './App.css';

const App = () =>{
  // render() {
    return (
      <div className="app">
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              {/* <BrowserRouter> */}
              <Routes>
                <Route path="/">
                <Route path="/CureFelt" element={<Homepage />} /> 
                <Route index  element={<Homepage />} /> 
                <Route path="/News" element={<News2 />} /> 
                <Route path="/Memes" element={<Memes/>} />
                <Route path="/Mailer" element={<Mailer/>} />
                
                </Route>
              </Routes>
            </div>
          </Layout>
        </div>
        <div className='footer'>

        </div>
      </div>
    );
  }


export default App;