const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

//Add/Book Flight
exports.addFlight = async (req, res) => {
    try {
        const {title, name, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            name,
            price, 
            date,
        };
        
        Flights.push(newFlight);

        res.status(201).json({
            message: "Flight Added",
            newFlight
        });

    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

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
};

//get single flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight
        });

    }catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

//update/edit user
exports.updateFlight = async (req, res) => {
    try {

        let id = req.params.id;
        const flight = Flights.find((user) => user.id == id);
        const {title, name, price, date} = await req.body;
        flight.title = title;
        flight.name = name;
        flight.price = price;
        flight.date = date;

        res.status(200).json({
            message: "Flight Update",
            flight,
        });

    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

//delete flights
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => user.id === id);
        Flights.splice(Flights.indexOf(flights), 1);
        res.status(200).json({
            message: "Flight Deleted",
            flight,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};