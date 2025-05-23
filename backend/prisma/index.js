const { PrismaClient } = require('.')

const prisma = new PrismaClient()

async function main() {
    // Esempio di inserimento coerente di un volo
    // Assicurati che questi ID esistano già nel tuo database!
    const liftoffDate = new Date('2024-07-01T10:00:00Z')
    const duration = 149 // durata in minuti
    const departure = 1 // ID aeroporto di partenza esistente
    const destination = 2 // ID aeroporto di destinazione esistente
    const aircraft = 1 // ID aereo esistente
    //await create(liftoffDate, duration, 1, aircraft)
    await create(1,1,2,1)
    //const ress = await setTripIdNullForBooking(3)
    //console.log(ress)
}
async function create(ticketCode, seatId, tripId, extraId) {
    return await prisma.bookings.create({
        data: {
            //ticket_code: ticketCode,
            //seat_id: seatId,
            trip_id: tripId,
            //extra_id: extraId
        }
    })
}





main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


/*
---------------
CAREFUL: TRIGGER THAT DELETE RECORDS WON'T RETURN THEM IN A return statement
        on server side, so carefult and plans with try catches
---------------



--------------- USER
async function getAdmin() {
    return await prisma.users.findFirst({
        where: {
            role: 1
        }
    })
}


async function getByEmail(email) {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    })
}

async function create(name, email, password) {
    return await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
}

async function updateName(email, name) {
    return await prisma.users.update({
        where: {
            email: email
        },
        data: {
            name: name
        }
    })
}

async function updatePassword(email, password) {
    return await prisma.users.update({
        where: {
            email: email
        },
        data: {
            password: password
        }
    })
}

async function removeByEmail(email) {
    return await prisma.users.delete({
        where: {
            email: email
        }
    })
}

--------------- ARIPORTS

async function getAll() {
    return await prisma.airports.findMany({})
}

async function create(city, name, timeZone, country) {
    return await prisma.airports.create({
        data: {
            city: city,
            name: name,
            time_zone: timeZone,
            country: country
        }
    })
}

async function updateName(id, name) {
    return await prisma.airports.update({
        where: {
            id: id
        },
        data: {
            name: name
        }
    })
}

--------------- AIRLINES

async function getAll() {
    return await prisma.airlines.findMany({})
}

async function create(name, password, country, motto) {
    return await prisma.airlines.create({
        data: {
            name: name,
            password:password,
            country: country,
            motto: motto,
        }
    })
}

async function updateInfo(name, newName, country, motto) {
    return await prisma.airlines.update({
        where:{
            name: name
        },
        data: {
            name: newName,
            country: country,
            motto: motto
        }
    })
}

--------------- AIRCRAFTS
async function create(model, seatsCapacity,ownerName) {
    return await prisma.aircrafts.create({
        data: {
            model: model,
            seats_capacity: seatsCapacity,
            owner_name: ownerName
        }
    })
}


--------------- ROUTES
async function create(departure, destination) {
    return await prisma.routes.create({
        data: {
            departure: departure,
            destination: destination
        }
    })
}

--------------- FLIGHTS
async function create(liftoffDate, duration, departure, destination, aircraft) {
    return await prisma.flights.create({
        data: {
            liftoff_date: liftoffDate,
            duration: duration,
            route_departure: departure,
            route_destination: destination,
            aircraft_id: aircraft
        }
    })
}

--------------- TICKETS
async function remove(code) {
    return await prisma.tickets.delete({
        where: {
            code: code
        }
    })
}

--------------- BOOKINGS

async function create(ticketCode, seatId, tripId, extraId) {
    return await prisma.bookings.create({
        data: {
            ticket_code: ticketCode,
            seat_id: seatId,
            trip_id: tripId,
            extra_id: extraId
        }
    })
}
async function remove(id) {
    return await prisma.bookings.delete({
        where: {
            id: id
        }
    })
}


*/
