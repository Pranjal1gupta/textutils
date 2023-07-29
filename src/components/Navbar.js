import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
   
  return (
    <>
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link class="navbar-brand" to="/">{props.title}</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">{props.abouttext}</Link>
      </li>
      
    </ul>

{/* <div class="btn-group mx-3">
  <button type="button" class="btn btn-primary btn-sm dropdown-toggle " data-toggle="dropdown" aria-expanded="false">
    Color Theme
  </button>
  <div class="dropdown-menu">
    <center>
    <div class="dropdown-item bg-primary my-2 rounded-pill" onClick={()=>props.toggleMode("primary")} style={{height:"30px",width:"15px",cursor:"pointer"}}></div>
    <div class="dropdown-item bg-danger my-2 rounded-pill" onClick={()=>props.toggleMode("danger")} style={{height:"30px",width:"15px",cursor:"pointer"}}></div>
    <div class="dropdown-item bg-warning my-2 rounded-pill" onClick={()=>props.toggleMode("warning")} style={{height:"30px",width:"15px",cursor:"pointer"}}></div>
    </center>
  </div>
</div> */}

{/* <div class="dropdown-item bg-success mx-2 my-2 rounded" onClick={()=>props.toggleMode("success")} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
    <div class="dropdown-item bg-danger mx-2 my-2 rounded" onClick={()=>props.toggleMode("danger")} style={{height:"30px",width:"15px",cursor:"pointer"}}></div> */}

<div class={`custom-control custom-switch text-${props.mode==='light'?"dark":"light"}`}>
  <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={()=>props.toggleMode(null)}/>
  <label class="custom-control-label" htmlFor="customSwitch1">Enable {props.mode==="light"?"dark":"light"} Mode</label>
</div>
  </div>
</nav>
    </>
  )
}
Navbar.prototype={title:PropTypes.string.isRequired,
                  abouttext:PropTypes.string.isRequired}

Navbar.defaultProps={title:"TextUtils",
                     abouttext:"About Us"}