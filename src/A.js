import React, { useContext } from 'react'
import AppContext from './context/AppContext'

export default function A() {

  const state = useContext(AppContext)


  return (
    <div>
     
     From A Component: {state.name}
      <h1>A</h1>
    </div>
  )
}
