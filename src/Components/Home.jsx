import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'
import Loading from './Helper/Loading'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Home' description='Feed com foto de diversos usuários' />
      <Feed />
    </section>
  )
}

export default Home
