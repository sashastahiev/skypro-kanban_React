import axios from 'axios'
const API_URL = 'https://wedev-api.sky.pro/api/kanban/'
export async function fetchTasks() {
   try {
      let data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
         },
      })
      return data.data.tasks
      // когда работаем с axios, не забываем, что результат лежит в ключе datа
   } catch (error) {
      throw new Error(error.message)
   }
}
export async function fetchTasksAdd(userData) {
   try {
      await axios.post(API_URL, userData, {
         headers: {
            Authorization: 'Bearer ' + "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
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
            Authorization: 'Bearer ' + "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
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
            Authorization: 'Bearer ' + "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
            "Content-Type": "",
         },
      });
   } catch (error) {
      throw new Error(error.message)
   }
}