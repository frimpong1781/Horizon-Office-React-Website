import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default navbar-home">
            <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={'./images/logo.png'} alt="logo" style={{width: 210, height: 50}} /> 
                    </a>
                </div>
                
                <div className="nav navbar-nav navbar-image-center">
                    <a className="navbar-brand" href="#"><img src={'./images/ghana.png'} alt="logo" style={{width: 30, height: 15 }} /></a>
                    <a className="navbar-brand" href="#"><img src={'./images/nigeria.png'} alt="logo" style={{width: 30, height: 15}} /></a>
                    <a className="navbar-brand" href="#"><img src={'./images/india.png'} alt="logo" style={{width: 30, height: 15}} /></a>
                </div>

            
                {/* Collect the nav links, forms, and other content for toggling  */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div> 
	    </nav>
    );
}

export default NavBar;
