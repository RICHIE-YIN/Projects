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
        query = "INSERT INTO messages (sender_id, recipient_id, product_id, content, created_at, updated_at) VALUES (%(sender_id)s, %(recipient_id)s, %(product_id)s, %(content)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)

    # Add more class methods for fetching, updating or deleting messages as needed.
