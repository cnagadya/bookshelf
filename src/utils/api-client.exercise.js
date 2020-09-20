const apiURL = process.env.REACT_APP_API_URL

function client(endpoint, opts = {},
  ) {
    const {token, customConfig} = opts
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined
      },
      ...customConfig,
    } 
    
    console.log(endpoint, opts)

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
/*
headers : {
  Authorization: `Bearer ${token}`
}
*/