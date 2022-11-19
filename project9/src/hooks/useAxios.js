import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxios = url => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(res => setData(res.data))
  }, [url])
  return { data }
}

export default useAxios
