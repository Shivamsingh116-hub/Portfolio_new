import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useEffect } from 'react'

const PhotoShow = ({ image, setPhotoShow }) => {
    const closeModal = () => setPhotoShow(false)
    useEffect(() => {
        const handler = (e) => e.key === 'Escape' && closeModal()
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
            onClick={closeModal}
        >
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image}
                    alt="Enlarged profile preview"
                    className="max-h-[90vh] w-auto object-contain"
                />

                <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close photo preview"
                    className="absolute right-2 hover:cursor-pointer top-2 flex items-center gap-1 rounded bg-white/80 px-3 py-1 text-sm font-semibold text-black transition hover:bg-white"
                >
                    Close
                    <CloseOutlinedIcon fontSize="small" />
                </button>
            </div>
        </div>
    )
}

export default PhotoShow
