import api from './api.js'

export const createBooking = (payload) => api.post('/bookings', payload)