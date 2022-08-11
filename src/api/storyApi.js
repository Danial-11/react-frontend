const axios = require('axios')

export const getStoryApi = async () => {
  const API_URL = 'http://localhost:3000/api/stories'
  return axios.get(API_URL).then(response => response)
}
