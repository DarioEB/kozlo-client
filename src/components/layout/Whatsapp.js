import React from 'react';

import imageWhatsapp from '../../images/whatsapp2.png'

const Whatsapp = () => {

    return (
        <div className="content-whatsapp">
            <a
                href={`https://api.whatsapp.com/send/?phone=543755344643&text&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src={imageWhatsapp}
                    alt="Imagen  Whatsapp "
                />
            </a>
        </div>        
    );
}

export default Whatsapp;