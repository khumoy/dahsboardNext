import React from 'react'
import { getPhotos } from '../api'
import Dashboard from '../containers/Dashboard'
import PhotosData from '../containers/PhotosData/PhotosData'

const Photos = (props) => {

    return (
        <>
            <Dashboard menu={"photos"}>
                <PhotosData data={props.data} />
            </Dashboard>
        </>
    )
}

export const getServerSideProps = async () => {

    const res = await getPhotos();
    return {
        props: { data: res }
    }

}

export default Photos
