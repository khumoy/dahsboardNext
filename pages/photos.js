import React from 'react'
import Dashboard from '../containers/Dashboard'
import PhotosData from '../containers/PhotosData/PhotosData'

const Photos = () => {
    return (
        <>
            <Dashboard menu={"photos"}>
                <PhotosData />
            </Dashboard>
        </>
    )
}

export default Photos
