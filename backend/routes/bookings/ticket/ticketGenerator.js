const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');


let browserPromise = (() => {
    // Detect the platform and set appropriate options
    const os = require('os');
    const platform = os.platform();
    
    let launchOptions = {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    };
    
    // Platform-specific browser configuration
    if (platform === 'linux') {
        // For Linux (Docker environments)
        const fs = require('fs');
        if (fs.existsSync('/usr/bin/chromium-browser')) {
            launchOptions.executablePath = '/usr/bin/chromium-browser';
        }
    } else if (platform === 'darwin') {
        // For macOS - try Chrome if bundled Chromium fails
        const fs = require('fs');
        const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
        if (fs.existsSync(chromePath)) {
            // Let Puppeteer use bundled Chromium first, fallback to Chrome if needed
            // Removing executablePath to let Puppeteer handle it automatically
        }
    }
    // For Windows and other platforms, let Puppeteer find the browser automatically
    
    return puppeteer.launch(launchOptions);
})();


async function generateTicketPDF(ticketData) {
    // Load your HTML template (could use a template engine for dynamic data)
    const templatePath = path.join(__dirname, 'template.html');

    let html = fs.readFileSync(templatePath, 'utf8');

    // generate QR code image
    let qrCodeDataURL;
    if (ticketData.tickets && ticketData.tickets.code) {
        try {
            qrCodeDataURL = await QRCode.toDataURL(ticketData.tickets.code, {
                errorCorrectionLevel: 'H',
                type: 'image/png',
                width: 300,
                margin: 1,
            });
        }
        catch (error) {
            console.error('Error generating QR code:', error);
            throw new Error('Failed to generate QR code');
        }
    }

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
               .replace(/{{barcodeIMG}}/g, qrCodeDataURL)
               .replace(/{{extras_description}}/g, ticketData.extras ? ticketData.extras.description : '')
               .replace(/{{extras_price}}/g, ticketData.extras && ticketData.extras.price !== undefined ? ticketData.extras.price + ' €' : 'No extras included');

    // Launch Puppeteer and generate PDF
    try {
        const browser = await browserPromise; // Reuse the same browser
        const page = await browser.newPage();
        await page.setContent(html, {
            timeout: 0,
            waitUntil: 'domcontentloaded',
        });
        await page.emulateMediaType('print');
        const pdfBuffer = await page.pdf({
            preferCSSPageSize: true,
            timeout: 0,
            format: 'A4'
        });
        await page.close();
        return pdfBuffer;
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

module.exports = { generateTicketPDF };