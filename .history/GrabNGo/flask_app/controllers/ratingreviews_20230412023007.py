from flask_app import app, render_template, redirect, session, request, flash
from flask_app.models.productlisting import ProductListing
from flask_app.models.ratingreview import RatingReview
from flask_app.models.message import Message
from flask_app.models.user import User

@app.route('/listings/<int:id>/select_reviewer')
def select_reviewer(id):
    if 'user_id' not in session:
        return redirect('/logout')

    product = ProductListing.get_one({'id': id})
    messages = Message.get_messages_for_product_listing({'product_id': id})
    users = [User.get_one({'id': message.sender_id}) for message in messages]

    return render_template('select_reviewer.html', product=product, users=users)

@app.route('/ratings/create', methods=['POST'])
def create_rating():
    if 'user_id' not in session:
        return redirect('/logout')

    data = {
        "rating": int(request.form['rating']),
        "review": request.form['review'],
        "reviewer_id": session['user_id'],
        "reviewee_id": request.form['reviewee_id']
    }

    RatingReview.save(data)
    flash('Rating and review submitted successfully', 'success')
    return redirect('/listings')
