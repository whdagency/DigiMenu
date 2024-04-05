import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AddQrCode from './components/AddQrCode';
import { Button } from "../components/ui/button";
import { MdRestaurantMenu } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import UserNav from "../pages/dashboard/components/user-nav";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";

const Users = () => {
    const defaultPageURL = "https://votre-domaine.com/page-par-defaut";
    const [names, setNames] = useState("");
    const [tableNames, setTableNames] = useState([]);

    const memoizedTableNames = useMemo(() => tableNames, [tableNames]);

    const updateTableNames = (newTableNames) => {
        setTableNames(newTableNames);
    };

    const addToTableNames = () => {
        updateTableNames([...tableNames, { nom: names }]);
        setNames("");
    };

    return (
        <>
            <div className="flex items-center justify-between space-y-2 p-4">
            <h2 className="text-3xl font-bold tracking-tight">User</h2>
            <div
              className="flex items-center space-x-2 "
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: ".5rem",
              }}
            >
              <Button>Download</Button>
</div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <AddQrCode tableNames={memoizedTableNames} />
            </div>
        </>
    );
}

export default Users;
