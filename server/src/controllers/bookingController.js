// controllers/bookingController.js  
const Booking = require('../models/Booking');  

const createBooking = async (req, res) => {  
    const { user_id, trip_id, number_of_seats, total_price } = req.body;  

    try {  
        const newBooking = await Booking.create({ user_id, trip_id, number_of_seats, total_price });  
        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ message: 'Error creating booking' });  
    }  
};  

const getBookingsByUser = async (req, res) => {  
    const { userId } = req.params;  

    try {  
        const bookings = await Booking.findByPk({ where: { user_id: userId } });  
        res.status(200).json(bookings);  
    } catch (error) { 
        console.error(error);  
        res.status(500).json({ message: 'Error retrieving bookings' });  
    }  
};  

module.exports = {  
    createBooking,  
    getBookingsByUser,  
};