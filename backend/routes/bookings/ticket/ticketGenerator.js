const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateTicketPDF(ticketData) {
    // Load your HTML template (could use a template engine for dynamic data)
    const templatePath = path.join(__dirname, 'template.html');

    let html = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual ticket data
    html = html.replace(/{{name}}/g, ticketData.bookings[0].trips.users.name)
               .replace(/{{flight}}/g, ticketData.flights.code)
               .replace(/{{date}}/g, ticketData.localDepartureDate)
               .replace(/{{from}}/g, ticketData.flights.routes.airports_routes_departureToairports.name)
               .replace(/{{from_code}}/g, ticketData.flights.routes.airports_routes_departureToairports.id.toString())
               .replace(/{{to}}/g, ticketData.flights.routes.airports_routes_destinationToairports.name)
               .replace(/{{to_code}}/g, ticketData.flights.routes.airports_routes_destinationToairports.id.toString())
               .replace(/{{seat}}/g, ticketData.bookings[0].seat_id.toString())
               .replace(/{{class}}/g, ticketData.type)
               .replace(/{{ticket_code}}/g, ticketData.code)
               .replace(/{{airline}}/g, ticketData.flights.airline_name)
               .replace(/{{barcode}}/g, ticketData.code);
               //.replace(/{{extras_description}}/g, ticketData.bookings[0].extras.map(extra => extra.description).join(', '))
               //.replace(/{{extras_price}}/g, ticketData.bookings[0].extras.map(extra => extra.price).join(', '));

    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch({ 
        headless: true,
        executablePath: '/usr/bin/google-chrome'});
    const page = await browser.newPage();
    await page.setContent(html, {
        timeout: 0,
        waitUntil: 'domcontentloaded',
    });
    await page.emulateMediaType('print');
    // Wait for you to check the page
    const pdfBuffer = await page.pdf({
        preferCSSPageSize: true,
        timeout: 0,
        format: 'A4'
    });
    //fs.writeFileSync(path.join(__dirname, 'ticket.pdf'), pdfBuffer);
    await page.close();
    await browser.close();
    return pdfBuffer;
}

module.exports = { generateTicketPDF };