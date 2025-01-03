import { useEffect } from "react"

const useScrollToTop = (shouldScroll) => {
  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [shouldScroll])
}

export default useScrollToTop
