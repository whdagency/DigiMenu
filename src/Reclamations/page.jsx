import React from 'react';
import Header from '../pages/header';
import Mail from './components/Mail'; // Import correct du composant MailList
import { accounts, mails } from "./data";
// Assurez-vous d'importer ou de définir correctement la fonction cookies

function Reclamations() {


    return (
        <>
            <Header />
            <div className="md:hidden">
                {/* Image */}
            </div>
            <div className='grid grid-cols-2'>
            <div className="hidden flex-col md:flex pt-4">
                <Mail // Utilisation du composant MailList
                    accounts={accounts}
                    mails={mails}

                />
            </div>
            <div className="hidden flex-col md:flex pt-4">
                <Mail // Utilisation du composant MailList
                    accounts={accounts}
                    mails={mails}

                />
            </div>
            </div>

        </>
    );
}

export default Reclamations;
