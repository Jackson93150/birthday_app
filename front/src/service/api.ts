import axios from "axios"

export const getBirthdays = async () => {
  const birthdays = await axios.get(`${process.env.REACT_APP_API_URL}user/birthday`)
  return birthdays.data;
}

export const getBirthdaysList = async () => {
  await axios.post(`${process.env.REACT_APP_API_URL}user`)
}