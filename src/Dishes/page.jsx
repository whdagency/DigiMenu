import { TableHeader } from "../components/ui/table"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import React ,{useState} from 'react';
async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default function DemoPage() {
//   const data = getData()

const data= [
    {
        id: "1",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Laptop Dell",
        groups: 2,
        price: 55,
        available: true,
        visible: false,

    },
    {
        id: "2",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "PlayStation",
        groups: 5,
        price: 35,
        available: true,
        visible: true
    },
    {
        id: "3",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Mobile Samsung Galaxy S23",
        groups: 2,
        price: 75,
        available: true,
        visible: true
    },
    {
        id: "4",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Gaming PC",
        groups: 2,
        price: 60,
        available: true,
        visible: true
    },
    {
        id: "5",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Mac",
        groups: 2,
        price: 55,
        available: true,
        visible: true
    },
    {
        id: "6",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Smart Watch",
        groups: 4,
        price: 55,
        available: true,
        visible: true
    },
    {
        id: "7",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "XBox",
        groups: 5,
        price: 45,
        available: true,
        visible: true
    },
    {
        id: "8",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "IPad",
        groups: 2,
        price: 55,
        available: true,
        visible: true
    },
    {
        id: "9",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "Ear Buds",
        groups: 2,
        price: 66,
        available: true,
        visible: true
    },
    {
        id: "10",
        image:"https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
        name: "SSD",
        groups: 2,
        price: 55,
        available: true,
        visible: true
    }
]
  console.log(data)
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="container mx-auto py-10">

      <DataTable columns={columns} data={data} />
    </div>
  )
}
