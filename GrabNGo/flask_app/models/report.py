from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import flash
from pprint import pprint
DATABASE = 'grabngo'

class Report:
    def __init__(self, data):
        self.id = data['id']
        self.reporter_id = data['reporter_id']
        self.listing_id = data['listing_id']
        self.reason = data['reason']
        self.additional_comments = data['additional_comments']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO reports (reporter_id, listing_id, reason, additional_comments) VALUES (%(reporter_id)s, %(listing_id)s, %(reason)s, %(additional_comments)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM reports"
        results = connectToMySQL(DATABASE).query_db(query)
        reports = []
        for report in results:
            reports.append(cls(report))
        return reports

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM reports WHERE id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) == 0:
            return None
        return cls(results[0])

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM reports WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)
