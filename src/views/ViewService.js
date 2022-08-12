import React from "react";

import HeaderStart from "../components/HeaderStart";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Service from "./Service";
import StartNow from "./StarNow";

const ViewService = () => {

    return (
        <>
            <HeaderStart/>
            <Menu/>
            {/*about-part start*/}
            <section className="about-part service-part">
                <div className="container">
                <div className="about-part-details text-center">
                    <h2>service</h2>
                    <div className="about-part-content">
                    <div className="breadcrumbs">
                        <div className="container">
                        <ol className="breadcrumb">
                            <li>
                            <a href="/">home</a>
                            <span>//</span>
                            </li>
                            <li>
                            <a href="/service">service</a>
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
            <Service/>
                
            <StartNow />
            <Footer />
        </>
    );
}

export default ViewService;