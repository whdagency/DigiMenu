import { TableHeader } from "../components/ui/table"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import React ,{useState} from 'react';
import Header from '../pages/header';
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

export default function DemoPageOrders() {
//   const data = getData()

const data = [
    { id: 1, date: "2024-03-01", items: ["burgers", "pizza"], subtotal: 100, status: "pending" },
    { id: 2, date: "2024-03-02", items: ["burgers", "pizza"], subtotal: 150, status: "completed" },
    { id: 3, date: "2024-03-03", items: ["burgers", "pizza"], subtotal: 200, status: "pending" },
    { id: 4, date: "2024-03-04", items: ["burgers", "pizza"], subtotal: 120, status: "completed" },
    { id: 5, date: "2024-03-05", items: ["burgers", "pizza"], subtotal: 180, status: "pending" },
    { id: 6, date: "2024-03-06", items: ["burgers", "pizza"], subtotal: 220, status: "completed" },
    { id: 7, date: "2024-03-07", items: ["burgers", "pizza"], subtotal: 130, status: "pending" },
    { id: 8, date: "2024-03-08", items: ["burgers", "pizza"], subtotal: 170, status: "completed" },
    { id: 9, date: "2024-03-09", items: ["burgers", "pizza"], subtotal: 250, status: "pending" },
    { id: 10, date: "2024-03-10", items: ["burgers", "pizza"], subtotal: 300, status: "completed" },
];

  console.log(data)
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    <Header/>
<div className="container mx-auto py-10">

      <DataTable columns={columns} data={data} />
    </div>
    </>

  )
}
