const {Flights} = require("../models/Flight");

//Add/Book Flight
exports.addFlight = async (req, res) => {
    try {
        const flight = await req.body;
        
        Flights.push(flight);

        res.status(201).json({
            message: "Flight Added",
            flight
        });

    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

//get all flights
exports.getFlights = async (req, res) => {
    try { 
        const flights = Flights;
        res.status(200).json({
            message: "All Flights",
            flights: flights
        });

    } catch (error) {
        res.status(500).json({message: err.message});        
    }
}

//get single flight




