
from flask import Flask, abort
import random
from ORM.db import create_schema
from routes.index import blueprints
from middlewares.errhandler import errHandler_bp
from flask_cors import CORS

# Crea lo schema all'avvio
create_schema()

app = Flask(__name__)

# CORS: consenti tutte le origini e credenziali (come nel backend Node)
CORS(app, origins="*", supports_credentials=True)

# blueprints registration for modular structure
for bp in blueprints:
    app.register_blueprint(bp)
    
app.register_blueprint(errHandler_bp)

@app.route('/')
def index():
    return {"message":"Welcome to the ngPy backend!"}

