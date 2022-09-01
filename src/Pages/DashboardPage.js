import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard nav</p>

      <Outlet/>
    </div>

  )
}
