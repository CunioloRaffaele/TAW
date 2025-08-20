from .users.index import user_bp
from .airlines.index import airline_bp
from .navigation.index import navigation_bp
from .bookings.index import booking_bp

blueprints = [
    user_bp,
    airline_bp,
    navigation_bp,
    booking_bp
]