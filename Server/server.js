require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const roomRoutes = require('./routes/roomRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const galleryRoutes = require('./routes/galleryRoutes')
const packageRoutes = require('./routes/packageRoutes')
const contactRoutes = require('./routes/contactRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API Running', module: 'Blue Whale Resort Server' })
})

app.use('/api/rooms', roomRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/contact', contactRoutes)

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})