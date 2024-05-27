import { useRef, useEffect } from 'react'
import Counter from './Counter'
import Container from '../layout/Container'
import useDetection from '../hook/useDetection'

const Experencie = () => {
  const expRef = useRef()
  const { handleSetOffset, isVisibleElement } = useDetection()
  useEffect(() => {
    const { offsetTop } = expRef.current

    handleSetOffset(offsetTop)
  }, [handleSetOffset])

  return (
    <section ref={expRef} className="flex bg-black-color-v1 text-white py-8">
      <Container padding classCustom="flex flex-col items-center sm:flex-row">
        <Counter start={0} end={25} speed={50} title="years of experencie" isVisible={isVisibleElement} />
        <Counter start={0} end={378} speed={10} title="project complete" isVisible={isVisibleElement} />
        <Counter start={0} end={69} speed={40} title="winning global award" isVisible={isVisibleElement} />
      </Container>
    </section>
  )
}

export default Experencie
