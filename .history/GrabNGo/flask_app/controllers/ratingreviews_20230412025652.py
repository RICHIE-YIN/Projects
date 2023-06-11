from flask_app import app, render_template, redirect, session, request, flash
from flask_app.models.productlisting import ProductListing
from flask_app.models.ratingreview import RatingReview
from flask_app.models.message import Message
from flask_app.models.user import User

@app.route('/listings/<int:id>/select_buyer')
def select_buyer(id):
    if 'user_id' not in session:
        return redirect('/logout')

    data = {'id': id}
    product = ProductListing.get_one(data)
    user_id = session['user_id']
    messages = Message.get_buyers_from_messages(user_id, id)

    return render_template("select_buyer.html", product=product, messages=messages)

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
