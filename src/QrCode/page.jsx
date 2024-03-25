// import QrCodeform from './components/QrCodeform'
import AddQrCode from './components/AddQrCode'
import { Button } from "../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
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
import React from 'react'

const QrCode = () => {
    const defaultPageURL = "https://votre-domaine.com/page-par-defaut";
  return (
    <>
      {/* <QrCodeform/> */}
      <div className="border-b ">
          <div className="flex h-16 items-center px-4">
            <div className="ml-auto flex items-center space-x-8" dir="rtl">
              <UserNav />
              <div className="w-1"></div>
              <Dialog>
                <DialogTrigger className="flex justify-center">
                <Button variant="ghost" className="relative h-8 w-8 rounded-full ">
                <Avatar className="h-8 w-8">
                <AvatarFallback><FaLink size={22} /></AvatarFallback>
                </Avatar>
                </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span style={{ marginRight: "0.5rem" }}>Your Menu</span>{" "}
                      <MdRestaurantMenu size={20} />
                    </DialogTitle>
                    <DialogDescription>
                      <div className="m-5 ml-10 flex mt-10 gap-10 ">
                        <img
                          className="w-19 h-19 m-auto"
                          src="https://media.istockphoto.com/id/828088276/fr/vectoriel/code-qr-illustration.jpg?s=612x612&w=0&k=20&c=3HruJu6JLgPsHstpZ5p43XkqqvP5c7AzJ7qwZ8KGgG4="
                          alt=""
                        />
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex justify-center items-center">
                    {/* Lien vers votre page par défaut avec le domaine personnalisé */}
                    <a
                      href={defaultPageURL}
                      className="text-blue-500 hover:underline"
                    >
                      {defaultPageURL}
                    </a>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* <TeamSwitcher /> */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full "
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                      <AvatarFallback>
                        <FaLink size={25} />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 flex flex-col items-center"
                  align="end"
                  forceMount
                >
                  <div className="flex items-center mt-5">
                    <MdRestaurantMenu size={20} />
                    <span style={{ marginLeft: "0.5rem" }}>Your Menu</span>
                  </div>
                  <div className="m-5 mt-10 flex gap-10">
                    <img
                      className="w-19 h-19"
                      src="https://media.istockphoto.com/id/828088276/fr/vectoriel/code-qr-illustration.jpg?s=612x612&w=0&k=20&c=3HruJu6JLgPsHstpZ5p43XkqqvP5c7AzJ7qwZ8KGgG4="
                      alt=""
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
           <AddQrCode/>
        </div>

    </>
  )
}

export default QrCode
