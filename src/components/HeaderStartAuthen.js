import React from "react";

import { Link } from "react-router-dom";

const HeaderStartAuthen = () =>{

   //console.warn(user)

    const logout =() => {
        localStorage.clear();
        window.location.href = '/';
    }

    return(
        <>
            {/*header start*/}
            <section className="header">
                <div className="container">
                <div className="header-left">
                    <ul className="pull-left">
                    <li>
                        <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" /> +992 563 542
                        </a>
                    </li>
                    {/*/li*/}
                    <li>
                        <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        info@mail.com
                        </a>
                    </li>
                    {/*/li*/}
                    </ul>
                    {/*/ul*/}
                </div>
                {/*/.header-left */}
                <div className="header-right pull-right">
                    <ul>
                    <li className="reg">
                        <Link to= "/home" onClick = {logout}> Log out  </Link>
                    </li>
                    {/*/li */}
                    <li>
                        <div className="social-icon">
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-google-plus" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            </li>
                        </ul>
                        {/*/.ul */}
                        </div>
                        {/*/.social-icon */}
                    </li>
                    {/*/li */}
                    </ul>
                    {/*/ul */}
                </div>
                {/*/.header-right */}
                </div>
                {/*/.container */}
            </section>
            {/*/.header*/}
            {/*header end*/}
            </>
    )
}

export default HeaderStartAuthen;