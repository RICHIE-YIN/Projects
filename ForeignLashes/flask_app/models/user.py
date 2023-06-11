from flask_app.config.mysqlconnection import connectToMySQL
# TODO add username validation
import re	# the regex module
# create a regular expression object that we'll use later   

DATABASE = 'foreignlashes'

from flask_app import flash

class User:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.username = data['username']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, username, password) VALUES (%(first_name)s, %(last_name)s, %(username)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # TODO Write a query method to verify the username entered in the login form
    @classmethod
    def get_by_username(cls, data):
        query = "SELECT * FROM users WHERE username = %(username)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result)
        if len(result) > 0:
            return User(result[0])
        else:
            return False
    
    @staticmethod
    def validate_user(user:dict) -> bool:
        is_valid = True
        # TODO Write a conditional statement for each validation
        if len(user['first_name']) < 2:
            is_valid = False
            flash("first name must be at least 2 characters")
        if len(user['last_name']) < 2:
            is_valid = False
            flash("last name must be at least 2 characters")
        if len(user['first_name']) < 3: 
            flash("username must be at least 3 characters")
            is_valid = False
        if user['password'] != user['confirm-password']:
            is_valid = False
            flash("passwords do not match")
        if len(user['password']) < 8:
            is_valid = False
            flash("password must be at least 8 characters")

        return is_valid
            
        
