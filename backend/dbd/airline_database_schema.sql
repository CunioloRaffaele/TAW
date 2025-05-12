-- Create Airlines Table
CREATE TABLE Airlines (
    name VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    country VARCHAR(100),
    motto VARCHAR(300)
);

-- Create Airports Table
CREATE TABLE Airports (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(255),
    country VARCHAR(100),
    time_zone INTEGER
);

-- Create Aircrafts Table
CREATE TABLE Aircrafts (
    id INTEGER PRIMARY KEY,
    model VARCHAR(100),
    seats_capacity INTEGER,
    owner_name VARCHAR(255),
    FOREIGN KEY (owner_name) REFERENCES Airlines(name)
);

-- Create Routes Table
CREATE TABLE Routes (
    departure INTEGER,
    destination INTEGER,
    FOREIGN KEY (departure) REFERENCES Airports(id),
    FOREIGN KEY (destination) REFERENCES Airports(id),
    PRIMARY KEY (departure, destination)
);

-- Create Uses Table
CREATE TABLE Uses(
    id INTEGER PRIMARY KEY,
    airline_name VARCHAR(255),
    route_departure INTEGER,
    route_destination INTEGER,
    FOREIGN KEY (airline_name) REFERENCES Airlines(name),
    FOREIGN KEY (route_departure, route_destination) REFERENCES Routes(departure, destination)
);

-- Create Flights Table
CREATE TABLE Flights (
    code VARCHAR(255) PRIMARY KEY,
    duration INTEGER,
    aircraft_id INTEGER,
    liftoff_date DATE,
    route_departure INTEGER,
    route_destination INTEGER,
    FOREIGN KEY (aircraft_id) REFERENCES Aircrafts(id),
    FOREIGN KEY (route_departure, route_destination) REFERENCES Routes(departure, destination)
);

-- Create Seats Table
CREATE TABLE Seats (
    id INTEGER PRIMARY KEY,
    postion VARCHAR(4),
    aircraft_id INTEGER,    
    FOREIGN KEY (aircraft_id) REFERENCES Aircrafts(id)
);

-- Create Users Table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role INTEGER
);

-- Create Tickets Table
CREATE TABLE Tickets (
    code VARCHAR(255) PRIMARY KEY,
    type VARCHAR(50),
    price DOUBLE PRECISION,
    fligt_code VARCHAR(255),
    FOREIGN KEY (fligt_code) REFERENCES Flights(code)
);


-- Create Trips Table
CREATE TABLE Trips (
    id INTEGER PRIMARY KEY,
    creation_date DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create Extras Table
CREATE TABLE Extras (
    id INTEGER PRIMARY KEY,
    description VARCHAR(255),
    price DOUBLE PRECISION
);


-- Create Bookings Table
CREATE TABLE Bookings (
    id INTEGER PRIMARY KEY,
    ticket_code VARCHAR(255),
    seat_id INTEGER,
    trip_id INTEGER,
    extras_id INTEGER,
    FOREIGN KEY (ticket_code) REFERENCES Tickets(code),
    FOREIGN KEY (seat_id) REFERENCES Seats(id),
    FOREIGN KEY (trip_id) REFERENCES Trips(id),
    FOREIGN KEY (extras_id) REFERENCES Extras(id)
);



