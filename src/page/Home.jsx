import Banner from '../components/Banner'
import Container from '../layout/Container'
import Experencie from '../components/Experencie'
import InfoBox from '../components/InfoBox'

const Home = () => {
  return (
    <Container>
      <Banner />
      <div className="relative">
        <Experencie />
        <InfoBox customCSS="max-w-full !rounded-none xl:absolute xl:-top-[50%] xl:right-10 xl:!rounded-xl  z-10" />
      </div>
    </Container>
  )
}

export default Home
