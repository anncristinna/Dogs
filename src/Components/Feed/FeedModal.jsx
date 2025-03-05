import React from 'react'
import Error from '../Helper/Error'
import styles from './FeedModal.module.css'
import Loading from '../Helper/Loading'
import { PHOTO_GET } from '../../api'

import useFetch from '../../Hooks/useFetch'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
    const { error, loading, request, data } = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo, request])

    function handleOutsideClick(event) {
        if(event.currentTarget === event.target) {
            setModalPhoto(null)
        }
        console.log('current', event.currentTarget)
        console.log('target', event.target)
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error erro={error} />}
            {loading && <Loading/>}
            {data && <PhotoContent data={data} />}
            
        </div>
    )
}

export default FeedModal
