from flask_app import app, render_template, redirect, session, request
from flask_app.models.productlisting import ProductListing
from flask_app.models.user import User
from flask_app.models.message import Message

@app.route('/listings/<int:id>/message')
def message(id):
    if 'user_id' not in session:
        return redirect('/logout')
    
    listing = ProductListing.get_one({'id': id})
    if not listing:
        return redirect('/listings')

    # Check if the user has already sent a message regarding the product
    sender_id = session['user_id']
    recipient_id = listing.user_id
    product_id = id
    existing_message = Message.get_one_by_sender_recipient_product(sender_id, recipient_id, product_id)

    return render_template('message.html', listing=listing, existing_message=existing_message)

@app.route('/messages', methods=['POST'])
def send_message():
    if 'user_id' not in session:
        return redirect('/logout')

    sender_id = session['user_id']
    recipient_id = request.form['recipient_id']
    product_id = request.form['product_id']
    content = request.form['content']

    # Check if the user has already sent a message regarding the product
    existing_message = Message.get_one_by_sender_recipient_product(sender_id, recipient_id, product_id)
    if existing_message:
        return redirect(f'/listings/{product_id}')

    data = {
        'sender_id': sender_id,
        'recipient_id': recipient_id,
        'product_id': product_id,
        'content': content
    }

    Message.save(data)

    return redirect(f'/listings/{product_id}')

