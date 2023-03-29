import UserService from '../services/users.js'

const getAllUsers = () => {
  try {
    const responseUsers = UserService.getAll()
    return responseUsers
  } catch (error) {
    console.error('ERROR: getting all users', error)
    throw error
  }
}

export default {
  getAllUsers
}
