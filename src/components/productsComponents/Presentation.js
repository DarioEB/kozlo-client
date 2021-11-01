import React from 'react';

const Presentation = ({tag = 'hombres', clase}) => {


    return (
        <section className={`section ${clase} section-height`}>
            <div className="back-section">
                <div className="container">
                    <div className="content">
                        <div
                            className="content-presentation__products"
                        >
                            <h1>K<span>ozlo.</span><span className="tag">{tag}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;