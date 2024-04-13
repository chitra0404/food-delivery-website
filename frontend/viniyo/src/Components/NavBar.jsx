import React from 'react'
import { useState ,useEffect} from 'react'
import {Link } from "react-router-dom";
import Cart from './Cart';
import RestaurantList from './RestaurantList';
import Login from './AuthComponents/Login';
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";




function NavBar() {

  return (
    <div>
    <nav className="navbar fixed-top navbar-light  p-2 text-white bg-white border-bottom border-3 border-danger">
  <div className="container-fluid">
    <div className="navbar-brand" style={{ textAlign: 'left' }}>
      <Link className='text-dark' to="/">
        <h1 className='fs-1 fst-italic text-danger'>viniyo</h1>
      </Link>
    </div>
       
    
    <ul className="nav"  >
     <li className="nav-item nav1 ">
    <a className="nav-link  active " aria-current="page" href="#" style={{ textAlign: 'left' }}><Link className='text-dark' to="/"><h5>Home</h5></Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link  active" aria-current="page" href="#"><Link className='text-dark' to="/rest"><h5><IoSearchSharp />search</h5></Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link  active" aria-current="page" href="#"><Link className='text-dark' to="/cart"><h5><FaCartPlus />Cart</h5></Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><Link className="text-dark" to="/login"><h5><FaUserCircle />SignIn</h5></Link></a>
  </li>
 
 
   </ul>
   </div>

  
</nav>
</div>

   
//     <div>
//         <nav className="navbar fixed-top navbar-light  p-2 text-white bg-opacity-75 justify-content-end">
//         <div className="container-fluid justify-content-end"> 
//     <nav className="navbar navbar-light" >
//     <nav className="navbar navbar-expand-lg navbar-light ">
//   <div className="container-fluid justify-content-end">
//     <a className="navbar-brand" href="#"></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarScroll">
//     <div className="collapse navbar-collapse" id="navbarNav">
      
//     <ul className="nav  ">
//     <li className="nav-item nav1 ">
//     <a className="nav-link  active " aria-current="page" href="#" style={{ textAlign: 'left' }}><Link className='text-dark' to="/"><h1  className='fs-1 fst-italic text-danger '>viniyo</h1></Link></a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link  active" aria-current="page" href="#"><Link className='text-dark' to="/res"><IoSearchSharp />search</Link></a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link  active" aria-current="page" href="#"><Link className='text-dark' to="/cart"><FaCartPlus />Cart</Link></a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#"><Link className="text-dark" to="/login"><FaUserCircle />SignIn</Link></a>
//   </li>
 
 
  
// </ul>

//     </div>
       
         
  
//     </div>
//   </div>
// </nav>
//   </nav>
 
//   </div>
 
// </nav>

// </div>
    
    
  )
}

export default NavBar