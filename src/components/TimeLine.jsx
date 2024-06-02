import { useState, useEffect } from 'react'
const TimeLine = ({ data }) => {
  const [counter, setCounter] = useState(0)
  let delay = 3000
  const counterValid = counter < data.length
  useEffect(() => {
    const intervalId = counterValid ? setInterval(() => setCounter((prev) => prev + 1), delay) : setCounter(0)
    return () => clearInterval(intervalId)
  }, [counterValid, delay])

  return (
    <div className="bg-red-color-v1 text-white flex relative overflow-x-auto p-12 ">
      {data &&
        data.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col items-center min-w-[290px] text-center before:block after:content-[''] after:w-full after:h-[1px] after:bg-white after:-translate-y-[6px]"
          >
            <p className=" px-8">{item.title}</p>
            <span className="my-2">Step {index + 1}</span>
            <span className="relative flex mt-2 h-3 w-3 ">
              <span
                className={`${
                  counter === index ? 'animate-ping' : undefined
                }  absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75`}
              ></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        ))}
    </div>
  )
}

export default TimeLine
