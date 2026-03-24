import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='row '>
        <div className='col-md-12'>
            <nav className='navbar navbar-expand-md  bg-dark'>
                
                <Link to={'/'} className='navbar-brand text-warning'><img src="/images/logo.png" alt="logo" className="img-fluid" style={{ maxHeight: "80px" }} />Liquor Hub</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                    <span className='navbar-toggler-icon'></span>
                </button>

                {/* collapsible content */}
                <div className='collapse navbar-collapse' id='navbarcollapse'>
                    <div className='navbar-nav '>
                        <Link to={"/"} className="nav-link active text-warning">Home</Link>
                        <Link to={"/addproduct"} className="nav-link text-warning">Add Product</Link>
                        <Link to={"/signin"} className="nav-link text-warning">Signin</Link>
                        <Link to={"/signup"} className="nav-link text-warning">Signup</Link>
                    </div>
                </div>

            </nav>
        </div>

    </div>
  )
}

export default Navbar