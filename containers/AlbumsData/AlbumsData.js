import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setAlbums } from '../../redux/action'
import { AlbumWrapper } from './AlbumWrapper';

const AlbumsData = (props) => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setAlbums(dispatch)
    // }, [])

    // const data = useSelector(state => state.albums);

    const { data } = props
    return (
        <AlbumWrapper>
            <div className="container">
                <div className="row">
                    {data?.map(v => <div className="col-sm-6 col-md-3">
                        <div key={v.id} className="cards">
                            <span>
                                {v.id}
                            </span>
                            <h5>{v.title}</h5>
                        </div>
                    </div>)}
                </div>
            </div>
        </AlbumWrapper>
    )
}

export default AlbumsData
