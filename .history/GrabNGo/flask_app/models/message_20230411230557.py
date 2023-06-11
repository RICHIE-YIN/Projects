from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.sender_id = data['sender_id']
        self.recipient_id = data['recipient_id']
        self.product_id = data['product_id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO message (sender_id, recipient_id, product_id, content, created_at, updated_at) VALUES (%(sender_id)s, %(recipient_id)s, %(product_id)s, %(content)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_messages_for_product(cls, user_id, recipient_id, product_id):
        query = "SELECT * FROM message WHERE ((sender_id = %(user_id)s AND recipient_id = %(recipient_id)s) OR (sender_id = %(recipient_id)s AND recipient_id = %(user_id)s)) AND product_id = %(product_id)s"
        data = {
            'user_id': user_id,
            'recipient_id': recipient_id,
            'product_id': product_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]
    
    @classmethod
    def get_all_messages_for_product(cls, product_id):
        query = "SELECT * FROM message WHERE product_id = %(product_id)s"
        data = {
            'product_id': product_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]

    @classmethod
    def get_messages_between_sender_and_recipient(cls, sender_id, recipient_id, product_id):
        query = "SELECT * FROM message WHERE ((sender_id = %(sender_id)s AND recipient_id = %(recipient_id)s) OR (sender_id = %(recipient_id)s AND recipient_id = %(sender_id)s)) AND product_id = %(product_id)s"
        data = {
            'sender_id': sender_id,
            'recipient_id': recipient_id,
            'product_id': product_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]

    @classmethod
    def get_conversation_between_users(cls, sender_id, recipient_id, product_id):
        query = "SELECT * FROM message WHERE ((sender_id = %(sender_id)s AND recipient_id = %(recipient_id)s) OR (sender_id = %(recipient_id)s AND recipient_id = %(sender_id)s)) AND product_id = %(product_id)s"
        data = {
            'sender_id': sender_id,
            'recipient_id': recipient_id,
            'product_id': product_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]

    @classmethod
    def get_messages_between_users_for_product(cls, sender_id, recipient_id, product_id):
        query = "SELECT * FROM message WHERE (sender_id = %(sender_id)s AND recipient_id = %(recipient_id)s OR sender_id = %(recipient_id)s AND recipient_id = %(sender_id)s) AND product_id = %(product_id)s ORDER BY created_at ASC"
        data = {
            'sender_id': sender_id,
            'recipient_id': recipient_id,
            'product_id': product_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]



    # Add more class methods for fetching, updating or deleting messages as needed.
