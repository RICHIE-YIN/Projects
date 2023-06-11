import base64

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
        query = "INSERT INTO productlisting (title, description, price, `condition`, category, location, zip, city, state, status, user_id, images) VALUES (%(title)s, %(description)s, %(price)s, %(condition)s, %(category)s, %(location)s, %(zip)s, %(city)s, %(state)s, %(status)s, %(user_id)s, %(images)s)"
        if image_data:
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            data['images'] = encoded_image
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM productlisting"
        results = connectToMySQL(DATABASE).query_db(query)
        listings = []
        for row in results:
            image = None
            if row['images']:
                image = base64.b64decode(row['images'])
            listings.append(cls(row, image))
        return listings

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM productlisting WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return None
        image = None
        if result[0]['images']:
            image = base64.b64decode(result[0]['images'])
        return cls(result[0], image)

    @classmethod
    def update(cls, data, image_data=None):
        query = "UPDATE productlisting SET title=%(title)s, description=%(description)s, price=%(price)s, condition=%(condition)s, category=%(category)s, location=%(location)s, zip=%(zip)s, city=%(city)s, state=%(state)s, updated_at=NOW()"
        
        if image_data:
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            query += ", images=%(images)s"
            data['images'] = encoded_image
        query += " WHERE id=%(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM productlisting WHERE id=%(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_listing(listing_data):
        is_valid = True
        # Add validation for the listing fields as needed
        return is_valid