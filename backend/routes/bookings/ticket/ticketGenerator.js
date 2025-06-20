const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateTicketPDF(ticketData) {
    // Load your HTML template (could use a template engine for dynamic data)
    const templatePath = path.join(__dirname, 'template.html');

    let html = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual ticket data
    html = html.replace(/{{name}}/g, ticketData.trips.users.name)
               .replace(/{{flight}}/g, ticketData.tickets.flights.code)
               .replace(/{{date}}/g, ticketData.localDepartureDate)
               .replace(/{{from}}/g, ticketData.tickets.flights.routes.airports_routes_departureToairports.name)
               .replace(/{{from_code}}/g, ticketData.tickets.flights.routes.airports_routes_departureToairports.id.toString())
               .replace(/{{to}}/g, ticketData.tickets.flights.routes.airports_routes_destinationToairports.name)
               .replace(/{{to_code}}/g, ticketData.tickets.flights.routes.airports_routes_destinationToairports.id.toString())
               .replace(/{{seat}}/g, ticketData.seats.postion)
               .replace(/{{class}}/g, ticketData.tickets.type)
               .replace(/{{ticket_code}}/g, ticketData.tickets.code)
               .replace(/{{airline}}/g, ticketData.tickets.flights.airline_name)
               .replace(/{{barcode}}/g, ticketData.tickets.code)
               .replace(/{{extras_description}}/g, ticketData.extras ? ticketData.extras.description : '')
               .replace(/{{extras_price}}/g, ticketData.extras && ticketData.extras.price !== undefined ? ticketData.extras.price + ' €' : '');

    // Launch Puppeteer and generate PDF
    try {
        const chromiumPath = fs.existsSync('/usr/bin/chromium-browser')
            ? '/usr/bin/chromium-browser'
            : '/usr/bin/chromium';

        const browser = await puppeteer.launch({
            headless: true,
            executablePath: chromiumPath,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
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
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

module.exports = { generateTicketPDF };