import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'

const FeedModal = ({ photo }) => {
    const { error, loading, request, data } = useFetch()

    return (
        <div className={styles.modal}>

        </div>
    )
}

export default FeedModal
