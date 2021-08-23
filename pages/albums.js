import React from 'react'
import AlbumsData from '../containers/AlbumsData'
import Dashboard from '../containers/Dashboard'

const Albums = () => {
    return (
        <>
            <Dashboard menu={'albums'}>
                <AlbumsData />
            </Dashboard>
        </>
    )
}

export default Albums
