import React, { useState } from 'react';
import TabsDemo from '../../components/custom/tabs';
import { HiOutlineArrowDownOnSquare } from 'react-icons/hi2';
import Header from '../../pages/header';

const QrCodeform = () => {
    const [qrValue, setQrValue] = useState();

    console.log(qrValue);

    return (
        <>
        <Header />
<div className="flex flex-col items-center justify-center h-screen">

            <h1 className='text-center p-3'>Download or print the QR code that your customers can scan to consult your menu. More on our Help page.</h1>
            <div className=' flex-1 space-y-4 p-8 pt-6 '>
                {/* <QrCodeTemplate setQrValue={setQrValue}/> */}
                <div>
                    <TabsDemo qrValue={qrValue} setQrValue={setQrValue} />
                    <div className='mt-20 float-end'>
                        <button className='px-5 py-2 bg-white text-blue-600 border-2 border-blue-500 flex gap-3 items-center font-normal rounded-md' >
                            <span>Download</span> {/* Placez le texte du bouton dans un span */}
                            <HiOutlineArrowDownOnSquare className='h-6 w-6' /> {/* Déplacez l'icône à l'extérieur du bouton */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default QrCodeform;
