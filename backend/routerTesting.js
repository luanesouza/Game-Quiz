const axios = require('axios');
const URL_USER = 'http://localhost:9000/users'
const URL_QUIZ = 'http://localhost:9000/quizes'

const getAll = async () => {
  let users = await axios.get(URL_USER)
  console.log(users.data);
  return users
}
// getAll()

let userData = {
  name: 'Tatyana'
}

const createUserData = async (userData) => {
  try {
    let newUser = await axios.post(URL_USER, userData)
    return newUser
  } catch(e) {
    console.error(e.message);
  }
}
// createData(userData)

const createQuizData = async (quizData) => {
  try {
    let newQuiz = await axios.post(URL_QUIZ, quizData)
    return newQuiz
  } catch(e) {
    console.error(e.message);
  }
}

let quizData = {
  topic: 'Ruby',
  users: [{"_id": "5e49981f8dbbd245b7271b4b"}, {"_id": "5e4999b865339546b3c23415"}]
}

createQuizData(quizData)
