from flask_app.config.mysqlconnection import connectToMySQL
# TODO add email validation
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

DATABASE = 'grabngo'

from flask_app import flash

class User:
    
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.user_type = data['user_type']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, user_type, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(user_type)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)

    # TODO Write a query method to verify the email entered in the login form
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result)
        if len(result) > 0:
            return User(result[0])
        else:
            return False

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0]) if result else None

    @classmethod
    def update(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, password = %(password)s, user_type = %(user_type)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    
    @staticmethod
    def validate_user(user:dict) -> bool:
        is_valid = True
        # TODO Write a conditional statement for each validation
        if len(user['first_name']) < 2:
            is_valid = False
            flash("first name must be at least 2 characters")
        if user['password'] != user['confirm-password']:
            is_valid = False
            flash("passwords do not match")
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        if len(user['password']) < 8:
            is_valid = False
            flash("password must be at least 8 characters")

        return is_valid
            
        
