from flask_app import app
from flask_app.controllers import bookings, users


if __name__ == '__main__':
    app.run(debug=True)