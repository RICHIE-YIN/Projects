from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint

DATABASE = 'foreignlashes'

class Service:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.price = data['price']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO services (name, description, price, user_id) VALUES (%(name)s, %(description)s, %(price)s, %(user_id)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = "UPDATE services SET name = %(name)s, description = %(description)s, price = %(price)s WHERE services.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls,data):
        query  = "DELETE FROM services WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM services JOIN users ON users.id = services.user_id WHERE services.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        return Service(results[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM services JOIN users ON users.id = services.user_id"
        results = connectToMySQL(DATABASE).query_db(query)
        services = []
        for service in results:
            services.append(cls(service))
        return services