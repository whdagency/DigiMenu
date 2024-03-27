import React from 'react'
import { Input } from '../../components/ui/input'
import ComboboxDemo from '../../components/custom/combobox'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { GrCurrency } from "react-icons/gr";

const FormMenu = () => {
  return (
    <div className=' w-full p-5 h-96  border m-5 rounded-md'>
      <h1 className='border-b-2'>Menu</h1>
      <div className=''>
        <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
          <div className='w-full md:w-1/2'>
            <label className=''>Location name :</label>
            <Input className='mt-3' placeholder='Entreprise' />
          </div>
          <div className='w-full md:w-1/2'>
            <label className='block mb-3'>Location :</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Restaurant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Restaurant</SelectLabel>
                  <SelectItem value="apple">Pomme</SelectItem>
                  <SelectItem value="banana">Banane</SelectItem>
                  <SelectItem value="blueberry">Myrtille</SelectItem>
                  <SelectItem value="grapes">Raisin</SelectItem>
                  <SelectItem value="pineapple">Ananas</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
          <div className='w-full md:w-1/2'>
            <label className='block mb-3'>Language menu :</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Langues" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Langues</SelectLabel>
                  <SelectItem value="english">Anglais</SelectItem>
                  <SelectItem value="french">Français</SelectItem>
                  <SelectItem value="spanish">Espagnol</SelectItem>
                  <SelectItem value="german">Allemand</SelectItem>
                  <SelectItem value="chinese">Chinois</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-full md:w-1/2'>
            <label className='block mb-3'>Currency :</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="$" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>$</SelectLabel>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="gbp">GBP</SelectItem>
                  <SelectItem value="jpy">JPY</SelectItem>
                  <SelectItem value="cny">CNY</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
          <div className='w-full md:w-1/2'>
            <label className='block mb-3'>Payement method :</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Méthode de paiement" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Méthode de paiement</SelectLabel>
                  <SelectItem value="card">Carte de crédit</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="cash">Espèces</SelectItem>
                  <SelectItem value="transfer">Virement bancaire</SelectItem>
                  <SelectItem value="crypto">Crypto-monnaie</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-full md:w-1/2'>
            <label className='block mb-3'>System of measurement :</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Métrique" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Métrique</SelectLabel>
                  <SelectItem value="metric">Métrique</SelectItem>
                  <SelectItem value="imperial">Impérial</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormMenu;
