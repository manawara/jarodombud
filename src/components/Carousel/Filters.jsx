import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../util/http'

const Filters = ({ onAction, category }) => {
  const categoryURL = 'http://localhost:1337/api/categories/?populate=*&sort[1]=name:asc'
  const {
    data: categoryData,
    isError,
    error,
  } = useQuery({
    queryKey: ['category'],
    queryFn: ({ signal }) => fetchData(categoryURL, signal),
  })

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <h3 className="uppercase font-semibold text-2xl ml-4 my-3">featured project</h3>
      <div className="flex">
        {categoryData &&
          categoryData.data.map(({ attributes: { name }, id }) => (
            <div key={id} className="text-white mr-3">
              <button
                type="button"
                onClick={() => onAction(name)}
                className={`hover:text-black-color-v1 hover:border-black-color-v1 hover:border-b-2 ${
                  category === name ? 'border-b-2 border-black-color-v1 text-black-color-v1' : undefined
                }`}
              >
                {name}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Filters
