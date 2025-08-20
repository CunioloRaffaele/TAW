from ORM.db import Base
from sqlalchemy import (
    Column, Integer, String, Boolean, Double, ForeignKey, CheckConstraint,
    TIMESTAMP, UUID, ForeignKeyConstraint
)
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import relationship
import uuid
# All table names are now lowercase
class blJWTs(Base):
    __tablename__ = "bljwts"
    id = Column(Integer, primary_key=True)
    jwt = Column(String(255), nullable=False)

class Airlines(Base):
    __tablename__ = "airlines"
    name = Column(String(255), primary_key=True)
    password = Column(String(255), nullable=False)
    country = Column(String(100), nullable=False)
    motto = Column(String(300), default="Fly with us, FlySafe and snug <3")
    enrolled = Column(Boolean, default=False)

class Airports(Base):
    __tablename__ = "airports"
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    city = Column(String(255), nullable=False)
    country = Column(String(100), nullable=False)
    lat = Column(Double, nullable=False)
    lan = Column(Double, nullable=False)
    time_zone = Column(String, nullable=False)
    __table_args__ = (
        CheckConstraint('lat BETWEEN -90 AND 90'),
        CheckConstraint('lan BETWEEN -180 AND 180'),
    )

class Aircrafts(Base):
    __tablename__ = "aircrafts"
    id = Column(Integer, primary_key=True)
    model = Column(String(100), default="Boeing 747")
    seats_capacity = Column(Integer, default=120)
    owner_name = Column(String(255), ForeignKey("airlines.name", onupdate="CASCADE", ondelete="CASCADE"), nullable=False)
    __table_args__ = (
        CheckConstraint('seats_capacity BETWEEN 25 AND 750'),
    )

class Routes(Base):
    __tablename__ = "routes"
    departure = Column(Integer, ForeignKey("airports.id", onupdate="CASCADE"), primary_key=True)
    destination = Column(Integer, ForeignKey("airports.id", onupdate="CASCADE"), primary_key=True)
    __table_args__ = (
        CheckConstraint('departure <> destination'),
    )

class Uses(Base):
    __tablename__ = "uses"
    id = Column(Integer, primary_key=True)
    airline_name = Column(String(255), ForeignKey("airlines.name", onupdate="CASCADE", ondelete="CASCADE"))
    route_departure = Column(Integer)
    route_destination = Column(Integer)
    __table_args__ = (
        ForeignKeyConstraint(
            ['route_departure', 'route_destination'],
            ['routes.departure', 'routes.destination'],
            onupdate="CASCADE",
            ondelete="CASCADE"
        ),
    )

class Flights(Base):
    __tablename__ = "flights"
    code = Column(PG_UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    duration = Column(Integer)
    aircraft_id = Column(Integer, ForeignKey("aircrafts.id", onupdate="CASCADE", ondelete="SET NULL"))
    liftoff_date = Column(TIMESTAMP)
    route_departure = Column(Integer)
    route_destination = Column(Integer)
    airline_name = Column(String(255), ForeignKey("airlines.name", onupdate="CASCADE", ondelete="SET NULL"))
    __table_args__ = (
        ForeignKeyConstraint(
            ['route_departure', 'route_destination'],
            ['routes.departure', 'routes.destination'],
            onupdate="CASCADE",
            ondelete="SET NULL"
        ),
        CheckConstraint('duration BETWEEN 90 AND 1140'),
    )

class Seats(Base):
    __tablename__ = "seats"
    id = Column(Integer, primary_key=True)
    postion = Column(String(4))
    aircraft_id = Column(Integer, ForeignKey("aircrafts.id", onupdate="CASCADE", ondelete="CASCADE"))
    __table_args__ = (
        CheckConstraint("postion LIKE '%__%'"),
    )

class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    role = Column(Integer, default=0)
    __table_args__ = (
        CheckConstraint('role IN (0,1)'),
        CheckConstraint("email LIKE '%_%@%._%'"),
    )

class Tickets(Base):
    __tablename__ = "tickets"
    code = Column(PG_UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String(25))
    price = Column(Double)
    fligt_code = Column(PG_UUID(as_uuid=True), ForeignKey("flights.code", onupdate="CASCADE", ondelete="CASCADE"))
    __table_args__ = (
        CheckConstraint("type IN ('ECONOMY', 'BUSINESS', 'BASE', 'DELUXE', 'LUXURY')"),
        CheckConstraint("price > 0"),
    )

class Trips(Base):
    __tablename__ = "trips"
    id = Column(Integer, primary_key=True)
    creation_date = Column(TIMESTAMP)
    user_id = Column(Integer, ForeignKey("users.id", onupdate="CASCADE", ondelete="CASCADE"))

class Extras(Base):
    __tablename__ = "extras"
    id = Column(Integer, primary_key=True)
    description = Column(String(255), nullable=False)
    price = Column(Double)
    __table_args__ = (
        CheckConstraint("price > 0"),
    )

class Bookings(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True)
    ticket_code = Column(PG_UUID(as_uuid=True), ForeignKey("tickets.code", onupdate="CASCADE", ondelete="SET NULL"))
    seat_id = Column(Integer, ForeignKey("seats.id", onupdate="CASCADE", ondelete="SET NULL"))
    trip_id = Column(Integer, ForeignKey("trips.id", onupdate="CASCADE", ondelete="SET NULL"))
    extras_id = Column(Integer, ForeignKey("extras.id", onupdate="CASCADE", ondelete="SET NULL"))
