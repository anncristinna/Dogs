import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'

const UserProphile = () => {
    const { user } = useParams()
    return (
        <section className='container mainSection'>
            <Head title="Perfil" descripition="Perfil do usuário"/>
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    )
}

export default UserProphile
