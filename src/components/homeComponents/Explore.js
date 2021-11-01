import React from 'react';

const Explore = ({textExplore}) => {


    return (
        <div className="container">
            <div
                className="content"
            >
                <div className="content-explore">
                    <span className="content-explore_line"></span>
                    <div className="content-explore_text">
                        <p>{textExplore}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;