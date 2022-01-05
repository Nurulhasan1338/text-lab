import React from 'react'
import propTypes from 'prop-types';

export default function Navbar(props){
  return(
    <nav className={`navbar navbar-expand-lg my-0 navbar-${props.mode}`} style={{backgroundColor:props.mode==='light'?"#e0eaee":"#212529"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="\">
       {/* see explation of props in notebook  */}
        <b >{props.title}</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <a className="nav-link" href="\">
              About
            </a>
          </li>   
        </ul>

        <div className="form-check m-3">
          <input className="form-check-input" type="radio" onClick={props.toggleMode} name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault2">
           Dark
          </label>
        </div>

        <div className="form-check m-3">
          <input className="form-check-input" type="radio" onClick={props.toggleMode} name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault2">
           light
          </label>
        </div>

      

 
          
     
      </div>
    </div>
  </nav>
  );
}


Navbar.propTypes = {
  title : propTypes.string,
  ab : propTypes.string

}

Navbar.defaultProps ={
  title : "Enter your title",
  ab : "about tilte"
}
