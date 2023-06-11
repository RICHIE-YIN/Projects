from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class UserProfile:

    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.bio = data['bio']
        self.location = data['location']
        self.profile_picture = data['profile_picture']
        self.profile_name = data['profile_name']
        self.email = data['email']
        self.phone = data['phone']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO user_profiles (user_id, bio, location, profile_picture, profile_name, email, phone, created_at, updated_at) VALUES (%(user_id)s, %(bio)s, %(location)s, %(profile_picture)s, %(profile_name)s, %(email)s, %(phone)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user_profiles;"
        results = connectToMySQL(DATABASE).query_db(query)
        profiles = []
        for profile in results:
            profiles.append(cls(profile))
        return profiles

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM user_profiles WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0]) if result else None

    @classmethod
    def update(cls, data):
        query = "UPDATE user_profiles SET bio = %(bio)s, location = %(location)s, profile_picture = %(profile_picture)s, profile_name = %(profile_name)s, email = %(email)s, phone = %(phone)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_user_profile(user_profile):
        is_valid = True
        # Add your validation logic here, e.g. checking if the profile_name is unique
        return is_valid

