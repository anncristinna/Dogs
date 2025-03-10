import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
  const {id} = useParams()
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTOS_GET(id)
    request(url, options)
  }, [request, id])

  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  if(data) return (
    <section>
      <PhotoContent data={data}/>
    </section>
  )
  else return null
}

export default Photo
