const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Booking', bookingSchema)