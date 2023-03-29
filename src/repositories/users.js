import UsersData from '../data/users.json' assert { type: "json" }

const getAllFromDB = () => {
  return UsersData
}

export {
  getAllFromDB
}
