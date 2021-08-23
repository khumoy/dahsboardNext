import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPhotos } from '../../redux/action';
import { PhotosWrapper } from './PhotosWrapper';


const PhotosData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);

    }, [])

    const data = useSelector(state => state.photos)
    return (
        <PhotosWrapper>
            <div className="container">
                <div className="row  align-items-center">
                    {data.map(v => <div className="col-sm-6 col-md-3">
                        <div className="item">
                            <div>
                                <span>{v.id}</span>
                            </div>
                            <div className="img p-3">
                                <img src={v.url} alt="fake Photo" />
                                <p>{v.title}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </PhotosWrapper>
    )
}

export default PhotosData
