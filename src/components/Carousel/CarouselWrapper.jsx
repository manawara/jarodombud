import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../util/http'
import Filters from './Filters'
import CarouselContent from './CarouselContent'
import { UseContextCarousel } from './CarouselCtx'
import arrowCircleRight from '../../assets/ArrowCircleRight.svg'
import { Link } from 'react-router-dom'

const CarouselWrapper = ({ options }) => {
  const { handleClickCategory, category } = UseContextCarousel()

  const gallery = `http://localhost:1337/api/galleries/?populate[0]=url&filters[categories][name][$contains]=${category}`
  const {
    data: galleryData,
    isError: isErrorGallery,
    error: errorGallery,
  } = useQuery({
    queryKey: ['gallery', category],
    queryFn: ({ signal }) => fetchData(gallery, signal),
  })
  return (
    <div className="bg-red-color-v1 py-8 overflow-hidden">
      <Filters onAction={handleClickCategory} category={category} />
      <CarouselContent data={galleryData} dataLength={galleryData && galleryData.data.length} options={options} />

      <Link to="/" className=" flex ml-auto max-w-max mr-2 items-center group">
        <span className="group-hover:scale-110 transition-transform duration-150">Explore All Projects</span>
        <img
          src={arrowCircleRight}
          alt="arrow right"
          className="ml-2 group-hover:translate-x-1 transition-transform duration-150"
        />
      </Link>
    </div>
  )
}

export default CarouselWrapper
