import ContextCarousel from './CarouselCtx'
import CarouselWrapper from './CarouselWrapper'
const Carousel = ({ options }) => {
  return (
    <ContextCarousel>
      <CarouselWrapper options={options} />
    </ContextCarousel>
  )
}

export default Carousel
