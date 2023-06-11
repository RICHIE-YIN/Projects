from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class UserProfile:
    def __init__(self, data):
        self.id = data['id']
        self.bio = data['bio']
        self.location = data['location']
        self.profile_picture = data['profile_picture']
        self.profile_name = data['profile_name']
        self.email = data['email']
        self.phone = data['phone']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO userprofile (bio, location, profile_picture, profile_name, email, phone, user_id) VALUES (%(bio)s, %(location)s, %(profile_picture)s, %(profile_name)s, %(email)s, %(phone)s, %(user_id)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_user_id(cls, data):
        query = "SELECT * FROM userprofile WHERE user_id=%(user_id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return None
        return cls(result[0])

    @classmethod
    def update(cls, data):
        query = "UPDATE userprofile SET bio=%(bio)s, location=%(location)s, profile_picture=%(profile_picture)s, profile_name=%(profile_name)s, email=%(email)s, phone=%(phone)s, updated_at=NOW() WHERE id=%(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_profile(profile_data):
        is_valid = True
        # Add validation for the profile fields as needed
        return is_valid

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM user_profiles WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        return cls(results[0]) if results else None
