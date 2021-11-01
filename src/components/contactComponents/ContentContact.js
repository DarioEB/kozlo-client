import React, {useContext} from 'react';
import FormContact from './FormContact';
import InformationContact from './InformationContact';

import newsletterContext from '../../contexts/newsletter/newsletterContext';
const ContentContact = () => { 

    
   const NewsletterContext = useContext(newsletterContext);
   const { createContact, loadContact } = NewsletterContext;


    return (
        <section className="section section-contact">
            <div className="container">
                <div className="title">
                    <h2>Contacto</h2>
                </div>
                <div className="content-contact">
                    <InformationContact />
                    <FormContact 
                        createContact={createContact}
                        loadContact={loadContact}
                    />
                </div>
            </div>
        </section>
    );
}

export default ContentContact;