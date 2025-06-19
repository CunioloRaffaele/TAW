-- extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


-- Create blJWTs Table
CREATE TABLE IF NOT EXISTS blJWTs (
    id SERIAL PRIMARY KEY,
    jwt VARCHAR(255) NOT NULL
);

-- Create Airlines Table
CREATE TABLE IF NOT EXISTS Airlines (
    name VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    motto VARCHAR(300) DEFAULT 'Fly with us, fly safe and snug <3',
    enrolled BOOLEAN DEFAULT FALSE
);

-- Create Airports Table
CREATE TABLE IF NOT EXISTS Airports (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    lat DOUBLE PRECISION NOT NULL,
    lan DOUBLE PRECISION NOT NULL,
    time_zone VARCHAR NOT NULL
);

-- Create Aircrafts Table
CREATE TABLE IF NOT EXISTS Aircrafts (
    id SERIAL PRIMARY KEY,
    model VARCHAR(100) DEFAULT 'Boeing 747',
    seats_capacity INTEGER DEFAULT 120,
    owner_name VARCHAR(255) NOT NULL,
	CHECK (seats_capacity BETWEEN 25 AND 750),
    FOREIGN KEY (owner_name) REFERENCES Airlines(name) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Create Routes Table
CREATE TABLE IF NOT EXISTS Routes (
    departure INTEGER,
    destination INTEGER,
	CHECK( departure <> destination),
    FOREIGN KEY (departure) REFERENCES Airports(id) ON UPDATE CASCADE,
    FOREIGN KEY (destination) REFERENCES Airports(id) ON UPDATE CASCADE,
    PRIMARY KEY (departure, destination)
);

-- Create Uses Table
CREATE TABLE IF NOT EXISTS Uses(
    id SERIAL PRIMARY KEY,
    airline_name VARCHAR(255),
    route_departure INTEGER,
    route_destination INTEGER,
    FOREIGN KEY (airline_name) REFERENCES Airlines(name) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (route_departure, route_destination) REFERENCES Routes(departure, destination) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Create Flights Table
-- duration is in minutes
CREATE TABLE IF NOT EXISTS Flights (
    code UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    duration INTEGER,
    aircraft_id INTEGER,
    liftoff_date TIMESTAMP,
    route_departure INTEGER,
    route_destination INTEGER,
    airline_name VARCHAR(255),
	CHECK (duration BETWEEN 90 and 1140),
    FOREIGN KEY (aircraft_id) REFERENCES Aircrafts(id) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (route_departure, route_destination) REFERENCES Routes(departure, destination) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (airline_name) REFERENCES Airlines(name) ON UPDATE CASCADE ON DELETE SET NULL
);

-- Create Seats Table
-- at leats one letter and one number
CREATE TABLE IF NOT EXISTS Seats (
    id SERIAL PRIMARY KEY,
    postion VARCHAR(4),
    aircraft_id INTEGER,
	CHECK (postion LIKE '%__%'),
    FOREIGN KEY (aircraft_id) REFERENCES Aircrafts(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Create Users Table
CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role INTEGER DEFAULT (0),
	CHECK (role IN (0,1)),
	CHECK (email LIKE '%_%@%._%')
);

-- Create Tickets Table
-- what are the standardized classes of a ticket? (arbitrary for us)
CREATE TABLE IF NOT EXISTS Tickets (
    --    code UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(50),
    price DOUBLE PRECISION,
    fligt_code UUID,
	CHECK (type IN ('ECONOMY', 'BUSINESS', 'BASE', 'DELUXE', 'LUXURY')),
	CHECK (price > 0),
    FOREIGN KEY (fligt_code) REFERENCES Flights(code) ON UPDATE CASCADE ON DELETE CASCADE
);


-- Create Trips Table
CREATE TABLE IF NOT EXISTS Trips (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Create Extras Table
CREATE TABLE IF NOT EXISTS Extras (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    price DOUBLE PRECISION,
	CHECK (price > 0)
);


-- Create Bookings Table
CREATE TABLE IF NOT EXISTS Bookings (
    id SERIAL PRIMARY KEY,
    ticket_code UUID,
    seat_id INTEGER,
    trip_id INTEGER,
    extras_id INTEGER,
    FOREIGN KEY (ticket_code) REFERENCES Tickets(code) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (seat_id) REFERENCES Seats(id) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (trip_id) REFERENCES Trips(id) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (extras_id) REFERENCES Extras(id) ON UPDATE CASCADE ON DELETE SET NULL
);

-- Funzione generica per creare una funzione trigger se non esiste già
-- Esempio di utilizzo: SELECT create_trigger_function_if_not_exists('filter_zombies', 'RETURN NEW;');

CREATE OR REPLACE FUNCTION create_trigger_function_if_not_exists(func_name text, func_body text)
RETURNS void AS $$
DECLARE
    exists boolean;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM pg_proc WHERE proname = func_name
    ) INTO exists;

    IF NOT exists THEN
        EXECUTE format(
            'CREATE FUNCTION %I() RETURNS TRIGGER AS $f$ BEGIN %s END; $f$ LANGUAGE plpgsql;',
            func_name, func_body
        );
    END IF;
END;
$$ LANGUAGE plpgsql;


-- TRIGGERS

-- < Remove bookings that aren't useful to users and airlines >
-- create function first
SELECT create_trigger_function_if_not_exists('filter_zombies', 'RETURN NEW;');
-- define then
CREATE OR REPLACE TRIGGER  unused_booking
AFTER INSERT OR UPDATE ON Bookings
FOR EACH ROW
EXECUTE FUNCTION filter_zombies();


CREATE OR REPLACE FUNCTION filter_zombies() RETURNS TRIGGER AS $$
BEGIN
	IF NEW.seat_id IS NULL AND NEW.trip_id IS NULL AND NEW.ticket_code IS NULL THEN
        DELETE FROM Bookings WHERE id = NEW.id;
        RETURN NULL; -- annulla la riga inserita/aggiornata
    END IF;
	RETURN NEW;---for now
END;
$$ LANGUAGE plpgsql;

-- < Generate seats from aircrafts insertion>
-- create function first
SELECT create_trigger_function_if_not_exists('generate_seats', 'RETURN NEW;');
-- define then
CREATE OR REPLACE TRIGGER seats_generator
AFTER INSERT ON Aircrafts
FOR EACH ROW
EXECUTE FUNCTION generate_seats();

CREATE OR REPLACE FUNCTION generate_seats() RETURNS TRIGGER AS $$
DECLARE
    row_letter char(1);
    seat_number integer;
    seats_per_row integer := 8;
    current_row integer := 1;
    seat_position varchar(4);
BEGIN
    -- Per ogni posto fino alla capacità massima
    FOR seat_counter IN 1..NEW.seats_capacity LOOP
        -- Calcola la lettera della fila (A, B, C, ...)
        row_letter := chr(64 + current_row); -- 65 è il codice ASCII per 'A'
        
        -- Calcola il numero del posto nella fila (1-8)
        seat_number := 1 + ((seat_counter - 1) % seats_per_row);
        
        -- Crea la posizione del posto (es: A1, B3, C7)
        seat_position := row_letter || seat_number::text;
        
        -- Inserisci il nuovo posto
        INSERT INTO Seats (postion, aircraft_id)
        VALUES (seat_position, NEW.id);
        
        -- Se abbiamo raggiunto l'ultimo posto della fila, passa alla prossima
        IF seat_number = seats_per_row THEN
            current_row := current_row + 1;
        END IF;
    END LOOP;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- populate database for testing
-- N.B. IDs that have autoincrement MUST NOT be explcitly set when inserting
-- new values; prisma can't keep up with the autoincremented values

-- 1. Inserimento Airlines (tabella indipendente)
INSERT INTO Airlines (name, password, country, motto, enrolled) VALUES
('FlySafe', '$2b$10$vV47kdLzjVjPHQ4pyZlQQesn1/yqmbNdQt48kXVmHK.Xmqj.lXAWW', 'Francia', 'Vive la france', TRUE),
('Emirates', 'em1r@t3s2024', 'United Arab Emirates', 'Fly Better', TRUE),
('Lufthansa', 'luft2024!secure', 'Germany', 'Say yes to the world', TRUE),
('Singapore Airlines', 'sing@p0r32024', 'Singapore', 'A Great Way to Fly', TRUE);

-- 2. Inserimento Airports (tabella indipendente)
INSERT INTO Airports (name, city, country, lat, lan, time_zone) VALUES
('Dubai International', 'Dubai', 'United Arab Emirates', 25.253174, 55.365673, 'Asia/Dubai'),
('Frankfurt Airport', 'Frankfurt', 'Germany', 50.037933, 8.562152, 'Europe/Berlin'),
('Changi Airport', 'Singapore', 'Singapore', 1.364420, 103.991531, 'Asia/Singapore'),
('Malpensa', 'Milano', 'Italy', 45.630062, 8.723068, 'Europe/Rome'),
('Charles de Gaulle', 'Paris', 'France', 49.009690, 2.547925, 'Europe/Paris'),
('Heathrow', 'London', 'UK', 51.470020, -0.454295, 'Europe/London'),
('John F. Kennedy International', 'New York', 'United States', 40.641311, -73.778139, 'America/New_York'),
('Los Angeles International', 'Los Angeles', 'United States', 33.941589, -118.408530, 'America/Los_Angeles'),
('Tokyo Haneda', 'Tokyo', 'Japan', 35.549393, 139.779839, 'Asia/Tokyo'),
('Sydney Kingsford Smith', 'Sydney', 'Australia', -33.939922, 151.175276, 'Australia/Sydney'),
('Madrid Barajas', 'Madrid', 'Spain', 40.498299, -3.567600, 'Europe/Madrid'),
('Toronto Pearson', 'Toronto', 'Canada', 43.677717, -79.624819, 'America/Toronto'),
('Beijing Capital', 'Beijing', 'China', 40.080111, 116.584556, 'Asia/Shanghai'),
('Istanbul Airport', 'Istanbul', 'Turkey', 41.275278, 28.751944, 'Europe/Istanbul'),
('Amsterdam Schiphol', 'Amsterdam', 'Netherlands', 52.310539, 4.768274, 'Europe/Amsterdam'),
('Zurich Airport', 'Zurich', 'Switzerland', 47.458056, 8.555556, 'Europe/Zurich');

-- 3. Inserimento Routes (dipende da Airports)
INSERT INTO Routes (departure, destination) VALUES
(1, 2), -- Dubai -> Frankfurt
(2, 3), -- Frankfurt -> Singapore
(1, 3), -- Dubai -> Singapore
(4, 5), -- Milano -> Parigi
(5, 6), -- Parigi -> Londra
(4, 6), -- Milano -> Londra
(1, 7),   -- Dubai -> New York JFK
(7, 8),   -- New York JFK -> Los Angeles LAX
(8, 9),   -- Los Angeles LAX -> Tokyo Haneda
(9, 10),  -- Tokyo Haneda -> Sydney Kingsford Smith
(10, 11), -- Sydney -> Madrid Barajas
(11, 12), -- Madrid -> Toronto Pearson
(12, 13), -- Toronto -> Beijing Capital
(13, 14), -- Beijing -> Istanbul
(14, 15), -- Istanbul -> Amsterdam Schiphol
(15, 16), -- Amsterdam -> Zurich
(16, 1),  -- Zurich -> Dubai
(3, 9),   -- Singapore -> Tokyo Haneda
(2, 12),  -- Frankfurt -> Toronto Pearson
(5, 13),  -- Paris -> Beijing Capital
(6, 7);   -- London Heathrow -> New York JFK

-- 4. Inserimento Aircrafts (dipende da Airlines)
INSERT INTO Aircrafts (model, seats_capacity, owner_name) VALUES
('Airbus A380', 550, 'Emirates'),
( 'Boeing 747-8', 400, 'FlySafe'),
( 'Airbus A350', 350, 'Singapore Airlines'),
( 'Airbus A320', 180, 'Lufthansa'),
( 'Boeing 777', 396, 'FlySafe'),
('Airbus A321', 200, 'Singapore Airlines');

-- 5. Inserimento Uses (dipende da Routes)
INSERT INTO Uses (airline_name, route_departure, route_destination) VALUES
('Emirates', 1, 2),
('Lufthansa', 2, 3),
('Singapore Airlines', 1, 3);

-- 6. Inserimento Seats (dipende da Aircrafts)
/*
INSERT INTO Seats (id, postion, aircraft_id) VALUES
(1, 'A1', 1),
(2, 'B2', 1),
(3, 'C3', 2);
*/
-- autogenerated by aircraft insert: careful on bookings while testing

-- 7. Inserimento Users (tabella indipendente)
INSERT INTO Users (name, email, password, role) VALUES
('John Doe', 'john@email.com', 'password123', 0),
('Admin User', 'admin@airline.com', 'admin123', 1),
('Admin', 'adminAccount@gmail.com', '$2b$10$dTV3A7cZwWjBiqKrxEXwuuIJGDkIKqSJOizMDkdwL9s0jQK4bsNx6', 1);

-- 8. Inserimento Flights (dipende da Routes e Aircrafts)
INSERT INTO Flights ( duration, aircraft_id, liftoff_date, route_departure, route_destination, airline_name) VALUES
( 368, 1, '2024-06-01 20:20:20', 1, 2, 'Emirates'),
( 728, 2, '2024-06-02 15:30:00', 2, 3, 'Lufthansa');

-- 9. Inserimento Tickets (dipende da Flights)
WITH 
ticket_data1 AS (
  SELECT code AS c1 FROM Flights WHERE duration = 368 LIMIT 1
),
ticket_data2 AS (
  SELECT code AS c2 FROM Flights WHERE duration = 728 LIMIT 1
),
ticket_data AS (
  SELECT 'ECONOMY' AS type, 500.00 AS price, c1 AS flight_code FROM ticket_data1
  UNION ALL
  SELECT 'BUSINESS', 1200.00, c2 FROM ticket_data2
)
INSERT INTO Tickets (type, price, fligt_code)
SELECT type, price, flight_code FROM ticket_data;

-- 10. Inserimento Trips (dipende da Users)
INSERT INTO Trips (creation_date, user_id) VALUES
('2024-05-15 20:20:20', 1),
('2024-05-16 15:30:00', 2);

-- 11. Inserimento Extras (tabella indipendente)
INSERT INTO Extras (description, price) VALUES
('Extra Baggage', 50.00),
('Airport Lounge', 75.00);

-- 12. Inserimento Bookings (dipende da Tickets, Seats, Trips, Extras)
WITH 
booking_data1 AS (
  SELECT code AS c1 FROM Tickets WHERE type = 'ECONOMY' LIMIT 1
),
booking_data2 AS (
  SELECT code AS c2 FROM Tickets WHERE type = 'BUSINESS' LIMIT 1
),
booking_data AS (
  SELECT c1 as code, 1 AS seat, 1 AS trip, 1 AS extra FROM booking_data1
  UNION ALL
  SELECT c2, 2, 2, 2 FROM booking_data2
)

INSERT INTO Bookings (ticket_code, seat_id, trip_id, extras_id)
SELECT code, seat, trip, extra FROM booking_data;

-- 13. Inserimento blJWTs (tabella indipendente)
INSERT INTO blJWTs (jwt) VALUES
('jwt1'),
('jwt2'),
('jwt3'),
('jwt4');


-- Funzione generica per creare una funzione trigger se non esiste già
-- Esempio di utilizzo: SELECT create_trigger_function_if_not_exists('filter_zombies', 'RETURN NEW;');

CREATE OR REPLACE FUNCTION create_trigger_function_if_not_exists(func_name text, func_body text)
RETURNS void AS $$
DECLARE
    exists boolean;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM pg_proc WHERE proname = func_name
    ) INTO exists;

    IF NOT exists THEN
        EXECUTE format(
            'CREATE FUNCTION %I() RETURNS TRIGGER AS $f$ BEGIN %s END; $f$ LANGUAGE plpgsql;',
            func_name, func_body
        );
    END IF;
END;
$$ LANGUAGE plpgsql;


-- TRIGGERS

-- < Remove bookings that aren't useful to users and airlines >
-- create function first
SELECT create_trigger_function_if_not_exists('filter_zombies', 'RETURN NEW;');
-- define then
CREATE OR REPLACE TRIGGER  unused_booking
AFTER INSERT OR UPDATE ON Bookings
FOR EACH ROW
EXECUTE FUNCTION filter_zombies();


CREATE OR REPLACE FUNCTION filter_zombies() RETURNS TRIGGER AS $$
BEGIN
	IF NEW.seat_id IS NULL AND NEW.trip_id IS NULL AND NEW.ticket_code IS NULL THEN
        DELETE FROM Bookings WHERE id = NEW.id;
        RETURN NULL; -- annulla la riga inserita/aggiornata
    END IF;
	RETURN NEW;---for now
END;
$$ LANGUAGE plpgsql;

-- < Generate seats from aircrafts insertion>
-- create function first
SELECT create_trigger_function_if_not_exists('generate_seats', 'RETURN NEW;');
-- define then
CREATE OR REPLACE TRIGGER seats_generator
AFTER INSERT ON Aircrafts
FOR EACH ROW
EXECUTE FUNCTION generate_seats();

CREATE OR REPLACE FUNCTION generate_seats() RETURNS TRIGGER AS $$
DECLARE
    row_letter char(1);
    seat_number integer;
    seats_per_row integer := 8;
    current_row integer := 1;
    seat_position varchar(4);
BEGIN
    -- Per ogni posto fino alla capacità massima
    FOR seat_counter IN 1..NEW.seats_capacity LOOP
        -- Calcola la lettera della fila (A, B, C, ...)
        row_letter := chr(64 + current_row); -- 65 è il codice ASCII per 'A'
        
        -- Calcola il numero del posto nella fila (1-8)
        seat_number := 1 + ((seat_counter - 1) % seats_per_row);
        
        -- Crea la posizione del posto (es: A1, B3, C7)
        seat_position := row_letter || seat_number::text;
        
        -- Inserisci il nuovo posto
        INSERT INTO Seats (postion, aircraft_id)
        VALUES (seat_position, NEW.id);
        
        -- Se abbiamo raggiunto l'ultimo posto della fila, passa alla prossima
        IF seat_number = seats_per_row THEN
            current_row := current_row + 1;
        END IF;
    END LOOP;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- < Limit two bookings (flights and therefore tickets bought) per trip
-- create function first
SELECT create_trigger_function_if_not_exists('limit_bookings_per_trip', 'RETURN NEW;');
-- define then
CREATE TRIGGER limit_bookings_per_trip_trigger
BEFORE INSERT OR UPDATE ON Bookings
FOR EACH ROW
EXECUTE FUNCTION limit_bookings_per_trip();

CREATE OR REPLACE FUNCTION limit_bookings_per_trip() RETURNS TRIGGER AS $$
DECLARE
    bookings_count INTEGER;
BEGIN
    IF NEW.trip_id IS NOT NULL THEN
        SELECT COUNT(*) INTO bookings_count FROM Bookings WHERE trip_id = NEW.trip_id;
        IF TG_OP = 'INSERT' THEN
            IF bookings_count >= 2 THEN
                RAISE EXCEPTION 'Non puoi avere più di 2 bookings per lo stesso trip_id (%).', NEW.trip_id;
            END IF;
        ELSIF TG_OP = 'UPDATE' THEN
            -- Se si cambia trip_id, controlla il nuovo valore
            IF (NEW.trip_id <> OLD.trip_id) AND (bookings_count >= 2) THEN
                RAISE EXCEPTION 'Non puoi avere più di 2 bookings per lo stesso trip_id (%).', NEW.trip_id;
            END IF;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

