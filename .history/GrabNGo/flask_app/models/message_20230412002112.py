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

    # @classmethod
    # def get_messages_for_product(cls, user_id, recipient_id, product_id):
    #     query = "SELECT * FROM message WHERE ((sender_id = %(user_id)s AND recipient_id = %(recipient_id)s) OR (sender_id = %(recipient_id)s AND recipient_id = %(user_id)s)) AND product_id = %(product_id)s"
    #     data = {
    #         'user_id': user_id,
    #         'recipient_id': recipient_id,
    #         'product_id': product_id,
    #     }
    #     results = connectToMySQL(DATABASE).query_db(query, data)
    #     if not results:
    #         return []
    #     return [cls(row) for row in results]
    
    @classmethod
    def get_conversations_for_user(cls, user_id):
        query = "SELECT DISTINCT recipient_id, CONCAT(u.first_name, ' ', u.last_name) AS recipient_name FROM message m JOIN user u ON m.recipient_id = u.id WHERE sender_id = %(user_id)s UNION SELECT DISTINCT sender_id, CONCAT(u.first_name, ' ', u.last_name) AS sender_name FROM message m JOIN user u ON m.sender_id = u.id WHERE recipient_id = %(user_id)s"
        data = {
            'user_id': user_id,
        }
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return [cls(row) for row in results]
    
    @classmethod
    def get_conversations(cls, user_id):
        query = """SELECT DISTINCT
                    product_id, 
                    IF(sender_id = %(user_id)s, recipient_id, sender_id) as contact_id
                    FROM message
                    WHERE (sender_id = %(user_id)s OR recipient_id = %(user_id)s)"""
        data = {'user_id': user_id}
        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return []
        return results

    # Add more class methods for fetching, updating or deleting messages as needed.
