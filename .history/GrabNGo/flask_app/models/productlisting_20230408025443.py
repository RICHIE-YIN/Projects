from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class ProductListing:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.condition = data['condition']
        self.category = data['category']
        self.images = data['images']
        self.location = data['location']
        self.zip = data['zip']
        self.city = data['city']
        self.state = data['state']
        self.status = data['status']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO product_listings (user_id, title, description, price, condition, category, images, location, zip, city, state, status, created_at, updated_at) VALUES (%(user_id)s, %(title)s, %(description)s, %(price)s, %(condition)s, %(category)s, %(images)s, %(location)s, %(zip)s, %(city)s, %(state)s, %(status)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM product_listings;"
        results = connectToMySQL(DATABASE).query_db(query)
        listings = []
        for listing in results:
            listings.append(cls(listing))
        return listings

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM product_listings WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0]) if result else None

    @classmethod
    def update(cls, data):
        query = "UPDATE product_listings SET title = %(title)s, description = %(description)s, price = %(price)s, condition = %(condition)s, category = %(category)s, images = %(images)s, location = %(location)s, zip = %(zip)s, city = %(city)s, state = %(state)s, status = %(status)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # You can add more methods as needed for filtering or sorting the product listings based on the status, etc.
