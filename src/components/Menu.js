import React from "react";
import logo from '../assets/images/logo/logo.png';

const Menu = () =>{
    return (
        <>
            {/*menu start*/}
            <section id="menu">
                <div className="container">
                    <div className="menubar">
                        <nav className="navbar navbar-default">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                            >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html">
                            <img src={logo} alt="logo" /> 
                            </a>
                        </div>
                        {/*/.navbar-header */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href= "/ " >Home</a>
                            </li>
                            <li>
                                <a href= "/about" >About</a>
                            </li>
                            <li>
                                <a href="/service">Service</a>
                            </li>
                            <li>
                                <a href="/project">Project</a>
                            </li>
                            <li>
                                <a href="/team">Team</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/#">
                                <span className="lnr lnr-cart" />
                                </a>
                            </li>
                            <li className="search">
                                <form action="">
                                <input type="text" name="search" placeholder="Search...." />
                                <a href="/#">
                                    <span className="lnr lnr-magnifier" />
                                </a>
                                </form>
                            </li>
                            </ul>
                            {/* / ul */}
                        </div>
                        {/* /.navbar-collapse */}
                        </nav>
                        {/*/nav */}
                    </div>
                    {/*/.menubar */}
                    </div>
                {/* /.container */}
            </section>
            {/*/#menu*/}
            {/*menu end*/}
            </>

    )
}
export default Menu; 