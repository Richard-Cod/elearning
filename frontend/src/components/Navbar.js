import React from 'react'


import {
  Link
} from "react-router-dom";

import KensiteLogo from '../kensitelogo.png'

export default function Navbar(){
    return <div style={{backgroundImage: `url(https://colorlib.com/preview/theme/webuni/img/bg.jpg)`,backgroundPosition:"center"}}>
        <nav style={{maxWidth:'80%'}}  className="navbar navbar-expand-lg  mx-auto ">
  <Link className="navbar-brand" to="/"><img height={100} width={300} src={KensiteLogo} alt=""/> </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link style={{fontSize:25}} className="nav-link text-white font-weight-bold" to="/">Accueil <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:25}} className="nav-link text-white font-weight-bold" to="/contact">Contact</Link>
      </li>

      <li className="nav-item dropdown">
          <Link style={{fontSize:25}} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Dropdowns</Link>
        
       
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link style={{fontSize:25}} className="dropdown-item">Utilisateurs</Link>
          <div className="dropdown-divider"></div>
          <Link style={{fontSize:25}} className="dropdown-item">Cours</Link>

        </div>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:25}} className="nav-link disabled text-white font-weight-bold" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
}