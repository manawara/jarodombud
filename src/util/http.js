export const fetchData = async (url, signal) => {
  const response = await fetch(url, { signal: signal })

  if (!response.ok) {
    const error = new Error('An error occured while fetching data')
    error.code = response.status
    error.info = 'Not found data...'
    throw error
  }

  const resData = await response.json()
  return resData
}
