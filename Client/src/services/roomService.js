import api from './api.js'

export const getRooms = () => api.get('/rooms')