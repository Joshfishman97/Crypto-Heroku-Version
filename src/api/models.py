from flask_sqlalchemy import SQLAlchemy
import datetime
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
    time_updated = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow)


class VideosOnCrypto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coin_id = db.Column(db.Integer, db.ForeignKey('coin.id'))
    coin = db.relationship("Coin")
    time_updated = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow)



class Coin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_updated = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow)
    namecoin = db.Column(db.String(250), unique=True, nullable=False)
    symbol = db.Column(db.String(250), unique=True, nullable=False)
    market_cap_rank = db.Column(db.Integer, unique=True, nullable=False)
    coingecko_id = db.Column(db.String(250), unique=True, nullable=False)



    