from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class ProductListing:
    def __init__(self, data, image=None):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.condition = data['condition']
        self.category = data['category']
        self.location = data['location']
        self.zip = data['zip']
        self.city = data['city']
        self.state = data['state']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.status = data['status']
        self.user_id = data['user_id']
        self.image = image

    @classmethod
    def save(cls, data, image_data):
        query = "INSERT INTO product_listings (title, description, price, condition, category, location, zip, city, state, status, user_id, image) VALUES (%(title)s, %(description)s, %(price)s, %(condition)s, %(category)s, %(location)s, %(zip)s, %(city)s, %(state)s, %(status)s, %(user_id)s, %(image)s)"
        data['image'] = image_data
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # ...
