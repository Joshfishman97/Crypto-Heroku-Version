from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, DateTime
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coin_id = db.Column(db.Integer, db.ForeignKey('coin.id'))
    coin = db.relationship("Coin")
    time_updated = db.Column(DateTime(timezone=True), onupdate=func.now())


class CryptoPriceData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coin_id = db.Column(db.Integer, db.ForeignKey('coin.id'))
    coin = db.relationship("Coin")
    namecoin = db.Column(db.String(250), unique=True, nullable=False)
    symbol = db.Column(db.String(250), unique=True, nullable=False)
    market_cap_rank = db.Column(db.String(250), unique=True, nullable=False)
    price_btc = db.Column(db.String(250), unique=True, nullable=False)
    candlestickgraph = db.Column(db.String(250), unique=True, nullable=False)
    time_updated = db.Column(DateTime(timezone=True), onupdate=func.now())


class VideosOnCrypto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coin_id = db.Column(db.Integer, db.ForeignKey('coin.id'))
    coin = db.relationship("Coin")
    time_updated = db.Column(DateTime(timezone=True), onupdate=func.now())



class Coin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_updated = db.Column(DateTime(timezone=True), onupdate=func.now())




    