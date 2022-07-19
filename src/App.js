import React from 'react';
import {Navbar, Articles, Homepage} from './component'
import { Routes ,Route } from 'react-router-dom';
import { Layout} from 'antd';


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
              <Routes>
                <Route path="/" element={<Homepage />} /> 
                <Route path="/articles" element={<Articles />} /> 
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