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
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM product_listings"
        results = connectToMySQL(DATABASE).query_db(query)
        listings = []
        for row in results:
            listings.append(cls(row))
        return listings

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM product_listings WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return None
        return cls(result[0])

    @classmethod
    def update(cls, data, image_data=None):
        query = "UPDATE product_listings SET title=%(title)s, description=%(description)s, price=%(price)s, condition=%(condition)s, category=%(category)s, location=%(location)s, zip=%(zip)s, city=%(city)s, state=%(state)s, status=%(status)s, updated_at=NOW() WHERE id=%(id)s"
        if image_data:
            query += ", image=%(image)s"
            data['image'] = image_data
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM product_listings WHERE id=%(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_listing(listing_data):
        is_valid = True
        # Add validation for the listing fields as needed
        return is_valid