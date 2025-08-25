import React from 'react'
import CardsRow from '../components/cardsRow'
import Charts from '../components/charts'

const Dashboard = () => {
  return (
    <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <CardsRow />
          <Charts />
    </div>
  )
}

export default Dashboard