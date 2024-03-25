import React from 'react'
import { Input } from '../../components/ui/input'
// import { ComboboxLanguage } from './custom/language'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const Profileform = () => {
    return (
        <div className='p-5 border m-5 rounded-md w-7/12'>
            <h1 className='border-b-2'>Profile</h1>
            <div className='w-full flex items-center gap-5 py-10'>
                <div className='w-full'>
                    <label >First name:</label>
                    <Input  className='my-3' placeholder='first name...'/>
                </div>
                <div className='w-full'>
                    <label> last name :</label>
                    <Input className='my-3' placeholder="last name..."/>
                </div>

            </div>
            <div className='w-full '>
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
            {/* <div className='w-full'>
                    <ComboboxLanguage/>
            </div> */}
        </div>
    )
}

export default Profileform
