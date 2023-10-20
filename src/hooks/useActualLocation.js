import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useActualLocation () {
  const [pageTitle, setPageTitle] = useState('')
  const location = useLocation()
  const actualLocation = location.pathname
  useEffect(() => {
    if (actualLocation === '/Products/Headphones') {
      setPageTitle('HEADPHONES')
    } else if (actualLocation === '/Products/Speakers') {
      setPageTitle('SPEAKERS')
    } else if (actualLocation === '/Products/Earphones') {
      setPageTitle('EARPHONES')
    }
  }, [location])

  return { pageTitle, actualLocation }
}
