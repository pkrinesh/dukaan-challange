import React from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState([window.innerWidth, window.innerHeight])

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return {
    windowWidth: windowSize[0],
    windowHeight: windowSize[1],
  }
}
