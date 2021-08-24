import React from 'react'
import CardsData from '../containers/CardsData'
import Dashboard from '../containers/Dashboard'

const Cards = () => {
    return (
        <Dashboard menu={'cards'}>
            <CardsData />
        </Dashboard>
    )
}



export default Cards
