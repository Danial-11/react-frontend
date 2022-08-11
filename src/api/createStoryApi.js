const axios = require('axios')

export const getCreateStoryApi = async (content) => {
  const API_URL = 'http://localhost:3000/api/stories'
  return axios.post(API_URL, { story: { caption: content } }).then(response => response)
}
