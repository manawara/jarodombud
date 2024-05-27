import { useState, useEffect } from 'react'

const Counter = ({ start, end, speed, title }) => {
  const [counter, setCounter] = useState({
    start: start ? start : 0,
    end: end ? end : 0,
  })
  useEffect(() => {
    if (counter.end > counter.start) {
      const timer = setInterval(
        () => {
          setCounter((prev) => ({
            ...prev,
            start: prev.start + 1,
          }))
        },

        speed
      )

      return () => {
        clearInterval(timer)
      }
    }
  }, [counter, speed])

  return (
    <div className="flex items-center text-inherit">
      <div className="text-red-color-v1 font-bold text-4xl w-24 text-right">{counter.start}+</div>
      <div className="ml-2 capitalize max-w-28">{title}</div>
    </div>
  )
}

export default Counter
