import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Routes>
        <Route path='/' element={<p>Root</p>} />
        <Route path='/other' element={<p>other</p>} />
      </Routes>
    </>
  )
}
