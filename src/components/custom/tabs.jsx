import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { SlRefresh } from 'react-icons/sl';

function TabsDemo({ qrValue, setQrValue }) {
    const [tableNames, setTableNames] = useState([{ nom: "53" }]);
    const [names, setNames] = useState("");



    const addToTableNames = () => {
        setTableNames(prevTableNames => [...prevTableNames, { nom: names }]);
        setNames(""); 
    };
    console.log(tableNames)
    return (
        <Tabs defaultValue="menu" className="w-[25rem] mx-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="menu" className="text-blue-500">Menu</TabsTrigger>
                <TabsTrigger value="password">Table specific</TabsTrigger>
            </TabsList>
            <TabsContent value="menu">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">Menu </CardTitle>
                        <CardDescription>
                            Make generate to your code Qr here.
                        </CardDescription>
                    </CardHeader>
                    {qrValue ? (
                        <div className="h-64 p-10 py-5 px-0 pb-0">
                            <div className={` ${qrValue?.style1.includes('bg-white') ? 'h-32 w-full bg-white' : 'h-32 w-full bg-blue-500 '}  `}>
                                <img className="w-48 h-48 m-auto pt-5" src={qrValue?.img} alt="" />
                            </div>
                            <div className={`${qrValue?.style2.includes('bg-blue-500') ? 'w-full bg-blue-500 h-32 rounded-b-lg' : 'w-full bg-white h-32 rounded-b-lg border-2 border-t-0 border-blue-500'} `}></div>
                        </div>
                    ) : (
                        <CardContent className="space-y-2 p-10 py-5 px-0 pb-0">
                            <div className="w-full bg-white h-32">
                                <img className="w-48 h-48 m-auto" src="https://media.istockphoto.com/id/828088276/fr/vectoriel/code-qr-illustration.jpg?s=612x612&w=0&k=20&c=3HruJu6JLgPsHstpZ5p43XkqqvP5c7AzJ7qwZ8KGgG4=" alt="" />
                            </div>
                            <div className="w-full bg-white h-32"></div>
                        </CardContent>
                    )}
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Table specific</CardTitle>
                        <CardDescription>Create a QR code for a specific table</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center bg-gradient-to-r from-white to-blue-500 h-full">
                        <div className="grid w-full max-w-sm items-center gap-2 pt-5">
                            {/* Afficher un champ d'entrée pour chaque nom de table */}
                            <Input
                                type="text"
                                placeholder="Table name"
                                value={names}
                                onChange={(e) => setNames(e.target.value)} // Mis à jour de 'names' avec la valeur de l'entrée
                            />
                            {/* Bouton pour ajouter le nom de la table */}
                            <button onClick={addToTableNames} className="bg-blue-500 text-white py-2 px-4 rounded">Add to Table</button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export default TabsDemo;
