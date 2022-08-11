const axios = require('axios')

export const getFollowersApi = async () => {
  const API_URL = 'http://localhost:3000/api/followers'
  return axios.get(API_URL).then(response => response)
}
