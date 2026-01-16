import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const PhotoShow = ({ image, setPhotoShow }) => {
    return (
        <div className='backdrop-blur-md box-border overflow-hidden fixed inset-0 flex justify-center items-center'>
            <div>
                <img
                    className='object-contain'
                    src={image} alt={`${image}`} />
                <button
                    onClick={() => { setPhotoShow(false) }}
                    style={{border:"0px"}}
                    className='w-full outline-none '
                    >Close<CloseOutlinedIcon /></button>
            </div>

        </div>
    )
}

export default PhotoShow