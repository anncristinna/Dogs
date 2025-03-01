import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = (props) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()

  const userLogout = React.useCallback(async function userLogout() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
  }, [])

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if(token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('Token inválido')
          await getUser(token)
        } catch(err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin()
  }, [userLogout])

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if(!tokenRes.ok){
        console.log(tokenRes.status + 'oi')
        throw new Error(`Error: ${tokenRes.status}`)
      }
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch(err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }

  }

  

  return (
    <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}>
      {props.children}
    </UserContext.Provider>
  )
}


