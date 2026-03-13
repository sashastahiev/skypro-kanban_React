import { fetchTasks } from "../services/api";
export let cardList = [];
export async function editList() {
    cardList = await fetchTasks();
}