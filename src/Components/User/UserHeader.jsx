import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
    const [titulo, setTitulo] = React.useState()
    const location = useLocation()

    React.useEffect(() => {
        if(location.pathname == '/conta/estatisticas'){
            setTitulo('Estatísticas')
        } else if (location.pathname == '/conta/postar') {
            setTitulo('Postar Foto')
        } else {
            setTitulo('Feed')
        }
    }, [location])

    return (
        <header className={styles.header}>
            <h1 className='title'>{titulo}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader
