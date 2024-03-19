import axios from 'axios'
// import { getUserFromLocalStorage } from './localStorage'

const customFetch = axios.create({
  baseURL:
    'https://kanban-task-management-system-02.onrender.com/api/v1/kanban',
})

// customFetch.interceptors.request.use((config) => {
//   const user = getUserFromLocalStorage()
//   if (user) {
//     config.headers['Authorization'] = `Bearer ${user.toke}`
//   }

// })

export default customFetch
