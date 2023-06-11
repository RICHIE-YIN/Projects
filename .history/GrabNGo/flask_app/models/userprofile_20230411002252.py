from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class UserProfile:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.profile_name = data['profile_name']
        self.bio = data['bio']
        self.location = data['location']
        self.email = data['email']
        self.phone = data['phone']
        self.profile_picture = data['profile_picture']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO user_profiles (user_id, profile_name, bio, location, email, phone, profile_picture, created_at, updated_at) VALUES (%(user_id)s, %(profile_name)s, %(bio)s, %(location)s, %(email)s, %(phone)s, %(profile_picture)s, NOW(), NOW());"
        user_profile_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_profile_id

    @classmethod
    def get_by_user_id(cls, data):
        query = "SELECT * FROM user_profiles WHERE user_id = %(user_id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        return cls(results[0]) if results else None

    @classmethod
    def update(cls, data):
        query = "UPDATE user_profiles SET profile_name=%(profile_name)s, bio=%(bio)s, location=%(location)s, email=%(email)s, phone=%(phone)s, profile_picture=%(profile_picture)s, updated_at=NOW() WHERE id=%(id)s;"
        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM user_profiles WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        return cls(results[0]) if results else None
