import Banner from '../components/Banner'
import Container from '../layout/Container'
import Experencie from '../components/Experencie'
import InfoBox from '../components/InfoBox'
import BannerText from '../components/BannerText'
import TimeLine from '../components/TimeLine'

const Home = () => {
  return (
    <Container>
      <Banner />
      <div className="relative">
        <Experencie />
        <InfoBox customCSS="max-w-full !rounded-none xl:absolute xl:-top-[10%] xl:right-10 xl:!rounded-xl  z-10" />
        <BannerText />
        <TimeLine
          data={[
            {
              title: 'Evaluation And Signing Of The Contract',
            },
            {
              title: 'Preparation Of The Work Plan',
            },
            {
              title: 'Implementation Of Quality Works',
            },
            {
              title: 'Delivering The Project To The Customer',
            },
          ]}
        />
      </div>
    </Container>
  )
}

export default Home
