import React from 'react'
import { getAlbums } from '../api'
import AlbumsData from '../containers/AlbumsData'
import Dashboard from '../containers/Dashboard'

const Albums = (props) => {

    return (
        <>
            <Dashboard menu={'albums'}>
                <AlbumsData data={props.data} />
            </Dashboard>
        </>
    )
}
export const getServerSideProps = async () => {

    const res = await getAlbums();

    return {
        props: { data: res }
    }
}

export default Albums
