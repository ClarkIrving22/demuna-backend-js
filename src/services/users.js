import { getAllFromDB } from '../repositories/users.js'

const getAll = () => {
  const usersFromDB = getAllFromDB()
  return usersFromDB
}

export default {
  getAll
}
