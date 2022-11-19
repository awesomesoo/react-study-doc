import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxios = url => {
  const [data, setData] = useState([])
  const [loading, setLoding] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data)
        setLoding(false)
        setError(null)
      })
      .catch(error => {
        setError('주소를 찾지 못합니다.')
      })
  }, [url])
  return { data, loading, error }
}

export default useAxios
