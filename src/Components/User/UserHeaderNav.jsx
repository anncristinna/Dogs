import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../../Assets/Feed.svg?react'
import Estatistica from '../../Assets/estatisticas.svg?react'
import AdicionarFoto from '../../Assets/adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const navigate = useNavigate()

    const {pathname} = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])
    
    function handleLogout() {
        userLogout()
        navigate('/login')
    }

    return (
        <>
        {mobile &&  
            (<button 
                className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                aria-label='Menu' 
                onClick={() => setMobileMenu(!mobileMenu)}>
            </button>)}
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to="/conta" end>
                <Feed />
                {mobile && "Minhas Fotos"}
            </NavLink>

            <NavLink to="/conta/estatisticas">
                <Estatistica />
                {mobile && "Estatísticas"}
            </NavLink>

            <NavLink to="/conta/postar">
                <AdicionarFoto />
                {mobile && "Adicionar Foto"}
            </NavLink>

            <button onClick={handleLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
        </>
    )
}

export default UserHeaderNav
