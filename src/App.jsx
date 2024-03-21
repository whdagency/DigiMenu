import { useState } from 'react'
// import './App.css'
import {RouterProvider} from 'react-router-dom';
import {router} from './router/index'
import Login from './authentification/page';

function App() {

  return (
    <>
        <RouterProvider router={router}>
            <Login/>
        </RouterProvider>
    </>
  )
}

export default App
