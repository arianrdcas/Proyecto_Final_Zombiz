import React from "react";


const CardTeam = (props) =>{
    return (
        <div className="single-team-box team-box-bg-1">
                <div className="team-box-inner">
                <h3>tom hanks</h3>
                <p className="team-meta">Founder &amp; CEO</p>
                <a href="/#" className="learn-btn">{props.image}</a>
                    learn more
                </div>
                
        </div>
    )
}
export default CardTeam; 