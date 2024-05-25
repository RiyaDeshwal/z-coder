

import React from 'react';

const Navbar = () => {
    return <div  className="w-100" style={{backgroundColor:"#202A44"}}>
<div  >
    <nav style={{backgroundColor:"#0d1326",width:"100vw"}} className="navbar rounded   navbar-expand-lg ">
  <div className="container-fluid bg-secondary-subtle rounded w-50 mt-3">
    <a className="navbar-brand font-weight-bold text-dark fs-3" href="#">Z-coder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3 mt-3 " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3 mt-3 " aria-current="page" href="#">Contests</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-4 mt-3 " aria-current="page" href="#">Comments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-5 fs-6 bg-dark my-3 rounded text-light h-50" aria-current="page" href="#">LogIn</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
    </div>;
}



export default Navbar;
