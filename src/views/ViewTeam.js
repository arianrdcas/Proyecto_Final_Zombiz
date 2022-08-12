import React from "react";

import Footer from "../components/Footer";
import HeaderStart from "../components/HeaderStart";
import Menu from "../components/Menu";

import StartNow from "./StarNow";
import Team from "./Team";



const ViewTeam = () => {
    return ( 
        <>
            <HeaderStart/>
            <Menu/>
                {/*about-part start*/}
                <section className="about-part team-part">
                    <div className="container">
                    <div className="about-part-details text-center">
                        <h2>team</h2>
                        <div
                        className="about-part-content">
                        <div className="breadcrumbs">
                            <div className="container">
                            <ol className="breadcrumb">
                                <li>
                                <a href="/">home</a>
                                <span>//</span>
                                </li>
                                <li>
                                <a href="/team">team</a>
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
            <Team/>
            <StartNow/>
            <Footer/>
        </>
    );
}

export default ViewTeam;