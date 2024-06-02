import { UseContextCarousel } from './CarouselCtx'

const CarouselContent = ({ data: dataCarousel, options }) => {
  const { properties, caruselRef, handleOnTouchEnd, handleOnTouchMove, handleOnTouchStart } = UseContextCarousel()
  const initialProperties = {
    width: options.width ? options.width : 320,
    marginBetween: options.marginBetween ? options.marginBetween : 12,
  }

  const transformStyle = {
    transform: `translateX(${!properties.isDrag ? properties.moveTo : properties.moveX + properties.moveTo}px) `,
    cursor: `${properties.isDrag ? 'grabbing' : 'pointer'}`,
  }

  return (
    <div
      className="h-80 inline-flex touch-none mt-4"
      style={transformStyle}
      ref={caruselRef}
      onTouchStart={handleOnTouchStart}
      onTouchEnd={handleOnTouchEnd}
      onTouchMove={handleOnTouchMove}
      onMouseDown={handleOnTouchStart}
      onMouseMove={handleOnTouchMove}
      onMouseUp={handleOnTouchEnd}
      onMouseLeave={handleOnTouchEnd}
    >
      {dataCarousel &&
        dataCarousel.data.map(
          ({
            attributes: {
              url: {
                data: {
                  attributes: { url },
                },
              },
            },
            id,
          }) => {
            const urlImage = 'http://localhost:1337' + url
            return (
              <div
                className="bg-cover last:!mr-6"
                key={id}
                style={{
                  backgroundImage: `url(${urlImage})`,
                  width: `${initialProperties.width}px`,
                  margin: `0 ${initialProperties.marginBetween}px`,
                }}
              ></div>
            )
          }
        )}
    </div>
  )
}

export default CarouselContent
