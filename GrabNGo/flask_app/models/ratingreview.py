from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class RatingReview:

    def __init__(self, data):
        self.id = data['id']
        self.reviewer_id = data['reviewer_id']
        self.reviewed_user_id = data['reviewed_user_id']
        self.rating = data['rating']
        self.review = data['review']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO ratingreview (reviewer_id, reviewed_user_id, rating, review, created_at, updated_at) VALUES (%(reviewer_id)s, %(reviewed_user_id)s, %(rating)s, %(review)s, NOW(), NOW())"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ratingreview;"
        results = connectToMySQL(DATABASE).query_db(query)
        reviews = []
        for review in results:
            reviews.append(cls(review))
        return reviews

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM ratingreview WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0]) if result else None

    @classmethod
    def update(cls, data):
        query = "UPDATE ratingreview SET rating = %(rating)s, review = %(review)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate_rating_review(rating_review):
        is_valid = True
        # Add your validation logic here, e.g. checking if the rating is within a valid range
        return is_valid

