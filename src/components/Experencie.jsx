import React from 'react'
import Counter from './Counter'
import Container from '../layout/Container'

const Experencie = () => {
  return (
    <section className="flex bg-black-color-v1 text-white py-8">
      <Container padding classCustom="flex">
        <Counter start={0} end={25} speed={50} title="years of experencie" />
        <Counter start={0} end={378} speed={10} title="project complete" />
        <Counter start={0} end={69} speed={40} title="winning global award" />
      </Container>
    </section>
  )
}

export default Experencie
