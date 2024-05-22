import React from 'react'
import '../pages/style.css'
import { NavLink } from 'react-router-dom'
export function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light shadow bg-body">
        <div className="container-fluid">
            <a className="navbar-brand mx-3" href="#"><img src='data:image/png;base64,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'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className='pages'>
                <ul className="navbar-nav">
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-warning nav-link' : "nav-link" }} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-warning nav-link' : "nav-link" }} to="/about">About</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-warning nav-link' : "nav-link" }} to="/books">Books</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-warning nav-link' : "nav-link" }} to="/login">Login</NavLink>
                    <li className="nav-item">
                        <form className="rounded" role="search">
                            <div className="input-group mb-3">
                                <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Arts</a></li>
                                    <li><a className="dropdown-item" href="#">Adventure</a></li>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Games</a></li>
                                    <li><a className="dropdown-item" href="#">Historical</a></li>
                                </ul>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Search books Here'/>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
            
            <div className="d-flex">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><i class="fa-solid fa-heart"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                        </li>
                        <li className="nav-item"> 
                            <div className="nav-link">
                                <div className="row">
                                    <div className="col">
                                        <img className="rounded-circle" src='data:image/jpeg;base64,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' width="40" height="40"/>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <h6>Rehab Kosbar</h6>
                                            <p><small className="text-muted">rehab@gmail.com</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
            <br />
            

        </div>
        </nav>
        <div className="container-fluid border-top">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          
        </div>
      </div>
    </div>
    
  )
}
