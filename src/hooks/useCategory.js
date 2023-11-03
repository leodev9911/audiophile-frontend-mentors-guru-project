import { useState, useEffect } from 'react'
import { useActualLocation } from './useActualLocation'

export function useCategory () {
  const { actualLocation } = useActualLocation()
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (actualLocation === '/Products/Headphones') {
      setCategory('headphones')
    } else if (actualLocation === '/Products/Earphones') {
      setCategory('earphones')
    }
    if (actualLocation === '/Products/Speakers') {
      setCategory('speakers')
    }
  }, [actualLocation])

  return { actualLocation, category }
}
