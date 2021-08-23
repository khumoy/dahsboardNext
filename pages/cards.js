import React from 'react'
import CardsData from '../containers/CardsData'
import Dashboard from '../containers/Dashboard'

const cards = () => {
    return (
        <Dashboard menu={'cards'}>
            <CardsData />
        </Dashboard>
    )
}

export default cards
