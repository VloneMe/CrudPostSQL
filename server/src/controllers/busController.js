// controllers/busController.js  
const Seat = require('../models/Seat');  

const createBusWithSeats = async (req, res) => {  
    const { bus_name, capacity, seat_layout, operator_id } = req.body;  

    try {  
        const newBus = await Bus.create({ bus_name, capacity, seat_layout, operator_id });  

        // Define seat positions based on layout  
        const seats = [];  
        if (seat_layout === '2 by 2') {  
            const seatsPerRow = 4; // 2 by 2  
            const totalRows = Math.ceil(capacity / seatsPerRow);  
            for (let row = 0; row < totalRows; row++) {  
                for (let seatPosition = 0; seatPosition < seatsPerRow; seatPosition++) {  
                    seats.push({  
                        bus_id: newBus.bus_id,  
                        position_x: seatPosition, // 0-3  
                        position_y: row // Row number  
                    });  
                }  
            }  
        } else if (seat_layout === '1 by 2') {  
            const seatsPerRow = 3; // 1 by 2  
            const totalRows = Math.ceil(capacity / seatsPerRow);  
            for (let row = 0; row < totalRows; row++) {  
                for (let seatPosition = 0; seatPosition < seatsPerRow; seatPosition++) {  
                    seats.push({  
                        bus_id: newBus.bus_id,  
                        position_x: seatPosition, // 0-2  
                        position_y: row // Row number  
                    });  
                }  
            }  
        }  

        // Bulk create seats  
        await Seat.bulkCreate(seats);  

        res.status(201).json({ message: 'Bus created with seats successfully', bus: newBus });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ message: 'Error creating bus with seats' });  
    }  
};  

module.exports = {  
    createBusWithSeats,  
    // ... other functions  
};