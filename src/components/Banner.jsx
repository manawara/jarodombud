import Button, { ButtonSecondary } from './Button'
import bannerImage from '../assets/construction-profe.jpeg'
import Container from '../layout/Container'
const Banner = () => {
  return (
    <section
      className={`relative py-[72px] flex flex-col bg-cover bg-[url('${bannerImage}')] before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-black-color-v1 before:to-gray-600 before:opacity-75 before:z-[1]`}
    >
      <Container padding classCustom="z-[2] text-white">
        <h1 className="capitalize text-4xl font-semibold  max-w-[460px]  sm:text-6xl sm:leading-tight">
          we prepare for the
          <span className="text-red-color-v1"> future</span>
        </h1>
        <p className="text-xl my-5">
          We the best architectural design, contruction, and building maintance services for you.
        </p>
        <div className="flex  flex-col sm:flex-row items-start">
          <Button classCustom="mb-4 sm:mr-4">Our Services</Button>
          <ButtonSecondary>View project</ButtonSecondary>
        </div>
      </Container>
    </section>
  )
}

export default Banner
