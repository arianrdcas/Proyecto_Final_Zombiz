import React from "react";

import Footer from "../components/Footer";
import HeaderStart from "../components/HeaderStart";
import Menu from "../components/Menu";

import ContacUs from "./ContactUs";
import StartNow from "./StarNow";




const ViewContact = () => {
    return ( 
        <>
            <HeaderStart/>
            <Menu/>
            
                {/*about-part start*/}
                <section className="about-part">
                    <div className="container">
                    <div className="about-part-details text-center">
                        <h2>contact us</h2>
                        <div className="about-part-content">
                        <div className="breadcrumbs">
                            <div className="container">
                            <ol className="breadcrumb">
                                <li>
                                <a href="/">home</a>
                                <span>//</span>
                                </li>
                                <li>
                                <a href="/contact">contact</a>
                                </li>
                            </ol>
                            {/*/.breadcrumb*/}
                            </div>
                            {/*/.container*/}
                        </div>
                        {/*/.breadcrumbs*/}
                        </div>
                        {/*/.about-part-content*/}
                    </div>
                    {/*/.about-part-details*/}
                    </div>
                    {/*/.container*/}
                </section>
                {/*/.about-part*/}
                {/*about-part end*/}
            <ContacUs/>
            <StartNow/>
            <Footer/>

        </>
    );
}

export default ViewContact;