import { useState, useEffect } from 'react'

export function useSizes () {
  const [actualWidth, setActualWidth] = useState()
  const handleResize = () => {
    setActualWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { actualWidth }
}
