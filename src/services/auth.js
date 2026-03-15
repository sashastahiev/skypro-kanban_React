import axios from 'axios'
import { editList } from '../js/data';
const API_URL = "https://wedev-api.sky.pro/api/user";
export async function signIn(Userdata) {
   try {
      const data = await axios.post(API_URL + "/login", Userdata, {
         headers: {
            "Content-Type": "",
         },
      });
      localStorage.setItem('token', data.data.user.token);
      await editList();
      return data.data.user
   } catch (error) {
      throw new Error(error.response.data.error);
   }
}

export async function signUp({ name, login, password }) {
   try {
      const data = await axios.post(
         API_URL,
         { login, name, password },
         {
         headers: {
            "Content-Type": "",
         },
      }
   );
   return data.data.user;
   } catch (error) {
      throw new Error(error.response.data.error);
  }
}