import os
import asyncio
import qrcode
import base64
from pyppeteer import launch
from pathlib import Path
from io import BytesIO

TEMPLATE_PATH = Path(__file__).parent / 'template.html'

_browser = None

async def get_browser():
    global _browser
    if _browser is not None:
        return _browser
    platform = os.uname().sysname.lower()
    launch_options = {
        'headless': True,
        'args': ['--no-sandbox', '--disable-setuid-sandbox'],
        'executablePath': '/usr/bin/chromium'  # o '/usr/bin/chromium-browser'
    }
    if platform == 'linux':
        if Path('/usr/bin/chromium-browser').exists():
            launch_options['executablePath'] = '/usr/bin/chromium-browser'
    _browser = await launch(**launch_options)
    return _browser

def generate_qr_code(data: str) -> str:
    qr = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    buf = BytesIO()
    img.save(buf, format='PNG')
    b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
    return f'data:image/png;base64,{b64}'

def fill_template(html: str, ticket_data: dict, qr_code_data_url: str) -> str:
    extras = ticket_data.get('extras', {})
    html = html.replace('{{name}}', ticket_data['trips']['users']['name'])
    html = html.replace('{{flight}}', ticket_data['tickets']['flights']['code'])
    html = html.replace('{{date}}', ticket_data['localDepartureDate'])
    html = html.replace('{{from}}', ticket_data['tickets']['flights']['routes']['airports_routes_departureToairports']['name'])
    html = html.replace('{{from_code}}', str(ticket_data['tickets']['flights']['routes']['airports_routes_departureToairports']['id']))
    html = html.replace('{{to}}', ticket_data['tickets']['flights']['routes']['airports_routes_destinationToairports']['name'])
    html = html.replace('{{to_code}}', str(ticket_data['tickets']['flights']['routes']['airports_routes_destinationToairports']['id']))
    html = html.replace('{{seat}}', ticket_data['seats']['postion'])
    html = html.replace('{{class}}', ticket_data['tickets']['type'])
    html = html.replace('{{ticket_code}}', ticket_data['tickets']['code'])
    html = html.replace('{{airline}}', ticket_data['tickets']['flights']['airline_name'])
    html = html.replace('{{barcodeIMG}}', qr_code_data_url)
    html = html.replace('{{extras_description}}', extras.get('description', ''))
    html = html.replace('{{extras_price}}', f"{extras.get('price', 'No extras included')} €" if 'price' in extras else 'No extras included')
    return html

async def generate_ticket_pdf(ticket_data: dict) -> bytes:
    html = TEMPLATE_PATH.read_text(encoding='utf-8')
    qr_code_data_url = ''
    if ticket_data.get('tickets', {}).get('code'):
        try:
            qr_code_data_url = generate_qr_code(ticket_data['tickets']['code'])
        except Exception as error:
            print('Error generating QR code:', error)
            raise RuntimeError('Failed to generate QR code')
    html = fill_template(html, ticket_data, qr_code_data_url)
    try:
        browser = await get_browser()
        page = await browser.newPage()
        await page.setContent(html)
        await page.emulateMedia('print')
        pdf_bytes = await page.pdf(preferCSSPageSize=True, timeout=0, format='A4')
        await page.close()
        return pdf_bytes
    except Exception as error:
        print('Error generating PDF:', error)
        raise

# Usage example (async context):
# pdf = asyncio.run(generate_ticket_pdf(ticket_data))