import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

function AddQrCode() {
  return (
    <>
      <Card className="col-span-3 w-[20%]">
        <CardHeader>
          <CardTitle>Add a QrCode</CardTitle>
          <CardDescription>
            You made 265 sales this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/QrCode/AddQrCode"> {/* Lien vers le composant à afficher */}
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                width: '100%',
                height: '100%',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                // Action à effectuer lors du clic sur l'icône
                console.log('Icon clicked');
              }}
            >
              <MdAddBox size={100} style={{ color: '#0f7cf0' }} />
            </button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}

export default AddQrCode;
