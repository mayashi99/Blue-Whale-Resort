import { useEffect, useState } from 'react'

export default function useFetch(fetcher, dependencies = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function load() {
      try {
        setLoading(true)
        const response = await fetcher()
        if (active) setData(response)
      } catch (err) {
        if (active) setError(err)
      } finally {
        if (active) setLoading(false)
      }
    }

    load()

    return () => {
      active = false
    }
  }, dependencies)

  return { data, loading, error }
}