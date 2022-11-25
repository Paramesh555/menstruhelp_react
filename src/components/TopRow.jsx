import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function TopRow(){

    const Navigate = useNavigate();
    return(
        <div className="top">
  <form>
    <button
      id="about_btn"
      className="top_btn"
      style={{ paddingLeft: 300 }}
      type="button"
    >
      ABOUT
    </button>
    <button id="feature_btn" className="top_btn" type="button">
      FEATURES
    </button>
    <button className="top_btn" type="button">
      FAQs
    </button>
    <button className="top_btn" type="button">
      PROFILE
    </button>
    <button
      className="top_btn"
      style={{ paddingLeft: 200 }}
      type="button"
      onClick = {() =>{
        return(Navigate('./Login'));
      }}
      
    >
      LOGIN/SIGNUP
    </button>
    {/* <button
      className="top_btn"
      style={{ paddingLeft: 200 }}
      type="button"
      onClick ={() =>{
        return(Navigate('./Signup'));
      }}
    >
      SIGN UP
    </button> */}
  </form>
  <h1>MenstruHelp</h1>
  <img src={require('./image.png')} alt='' />
  <h1>hello</h1>
  
</div>
    );
}

export default TopRow;
        