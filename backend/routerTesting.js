const axios = require('axios');
const URL = 'http://localhost:9000/users'

const getAll = async () => {
  let users = await axios.get(URL)
  console.log(users);
  return users
}

getAll()
