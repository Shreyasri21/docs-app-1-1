import Table from './components/Table.js'
import Home from './components/Home.js'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'


export default function Pageroutes() {
    return(
    <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/table" element={<Table />}></Route>
    </Routes>
  )
}
