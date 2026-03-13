import axios from 'axios'
const API_URL = 'https://wedev-api.sky.pro/api/kanban/'
export async function fetchTasks() {
   try {
      let data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
         },
      })
      return data.data.tasks
   } catch (error) {
      throw new Error(error.message)
   }
}
export async function fetchTasksAdd(userData) {
   try {
      await axios.post(API_URL, userData, {
         headers: {
            Authorization: 'Bearer ' +  localStorage.getItem('token'),
            "Content-Type": "",
         },
      });
   } catch (error) {
      throw new Error(error.response.data.error)
   }
}
export async function fetchTasksEdit(userData) {
   try {
      await axios.put(API_URL + userData._id, userData, {
         headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            "Content-Type": "",
         },
      });
   } catch (error) {
      throw new Error(error.message)
   }
}
export async function fetchTasksDelete(userData) {
   try {
      await axios.put(API_URL + userData._id,userData,{
         headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            "Content-Type": "",
         },
      });
   } catch (error) {
      throw new Error(error.message)
   }
}