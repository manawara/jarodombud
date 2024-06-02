import { createContext, useContext, useState, useRef, useEffect } from 'react'
const ContextCarousel = createContext({
  startX: '',
  endX: '',
  moveX: '',
  moveTo: '',
  isDrag: false,
  actualX: '',
  category: '',
  properties: '',
  handleOnTouchStart: () => {},
  handleOnTouchMove: () => {},
  handleOnTouchEnd: () => {},
  handleClickCategory: () => {},
})
export const UseContextCarousel = () => {
  const ctx = useContext(ContextCarousel)
  if (!ctx) {
    throw new Error('Modal-related components must be wrapped by <CarouselCtx>.')
  }
  return ctx
}

const initialState = {
  startX: 0,
  moveX: 0,
  moveTo: 0,
  isDrag: false,
  actualX: 0,
}
const CarouselCtx = ({ children }) => {
  const [category, setCategory] = useState('All')
  const [properties, setProperties] = useState(initialState)

  const handleClickCategory = (name) => {
    setCategory(name)
  }

  const caruselRef = useRef()

  const handleOnTouchStart = (e) => {
    setProperties((prev) => {
      return {
        ...prev,
        startX: e.type === 'touchstart' ? e.targetTouches[0].clientX : e.clientX,
        isDrag: true,
        moveX: 0,
      }
    })
  }

  const handleOnTouchMove = (e) => {
    const actualPosition = properties.moveX + properties.moveTo
    let move = e.type === 'touchmove' ? e.targetTouches[0].clientX - properties.startX : e.clientX - properties.startX

    setProperties((prev) => {
      return {
        ...prev,
        moveX: move,
        actualX: actualPosition,
      }
    })
  }

  const handleOnTouchEnd = () => {
    const maxWidth = caruselRef.current.offsetWidth - window.innerWidth
    if (-maxWidth > properties.actualX) {
      setProperties((prev) => {
        return {
          ...prev,
          moveTo: caruselRef.current.offsetWidth > window.innerWidth ? -maxWidth : 0,
          moveX: 0,

          isDrag: false,
        }
      })
    } else if (properties.actualX > 0) {
      setProperties((prev) => {
        return {
          ...prev,
          moveTo: 0,
          moveX: 0,
          isDrag: false,
        }
      })
    } else {
      setProperties((prev) => {
        return {
          ...prev,
          moveTo: prev.moveTo + prev.moveX,
          isDrag: false,
          moveX: 0,
        }
      })
    }
  }

  useEffect(() => {
    setProperties(initialState)
  }, [category])

  const ctxState = {
    caruselRef,
    properties,
    category,
    handleOnTouchStart,
    handleOnTouchMove,
    handleOnTouchEnd,
    handleClickCategory,
  }

  return <ContextCarousel.Provider value={ctxState}>{children}</ContextCarousel.Provider>
}

export default CarouselCtx
