import React from "react";

import HeaderStart from "../components/HeaderStart";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import FinishProject from "./FinishProject";
import StartNow from "./StarNow";

const Project = () => {
    return ( 
        <>
            <HeaderStart/>
            <Menu/>
                        {/*about-part start*/}
            <section className="about-part project-part">
                <div className="container">
                <div className="about-part-details text-center">
                    <h2>project</h2>
                    <div className="about-part-content">
                    <div className="breadcrumbs">
                        <div className="container">
                        <ol className="breadcrumb">
                            <li>
                            <a href="/">home</a>
                            <span>//</span>
                            </li>
                            <li>
                            <a href="/project">project</a>
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
            <FinishProject/>
            <StartNow/>
            <Footer/>
            
        </>
    );
}

export default Project;