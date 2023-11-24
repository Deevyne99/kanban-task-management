import axios from 'axios'

const customFetch = axios.create({
  baseURL:
    'https://kanban-task-management-system-02.onrender.com/api/v1/kanban',
})

export default customFetch
