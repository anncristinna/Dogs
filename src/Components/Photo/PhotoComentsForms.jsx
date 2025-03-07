import React from 'react'
import { UserContext } from '../../UserContext'
import ButtonEnviar from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch'
import { COMENT_POST } from '../../api'
import styles from './PhotoComentForms.module.css'

const PhotoComentsForms = ({id, setComments}) => {
    const [comment, setComment] = React.useState('')
    const {request, error} = useFetch()

    async function handleSubmit(event) {
        event.preventDefault()
        const {url, options} = COMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        if(response.ok) {
            setComments((comments) => [...comments, json])
            setComment('')
        }
    }

    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            <textarea 
                className={styles.textArea}
                value={comment}
                id='coment' 
                name='coment' 
                onChange={({target}) => setComment(target.value)} 
                placeholder='Comente...'
            />
            <button className={styles.butaoEnviar}><ButtonEnviar/></button>
        </form>
    )
}

export default PhotoComentsForms
