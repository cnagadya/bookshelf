export const client = async (endpoint, customConfig = {}) => {
  const response = await window.fetch(` ${process.env.REACT_APP_API_URL}/${endpoint}`,
    {
      method: 'GET',
      ...customConfig
    })
  return response.json()
}

// export { client }

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/
