from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.message import Message
from flask_app.models.user import User
from flask_app.models.productlisting import ProductListing

# @app.route('/message/product/<int:product_id>', methods=['GET'])
# def view_product_messages(product_id):
#     if not 'user_id' in session:
#         return redirect('/')

#     user = User.get_one({'id': session['user_id']})
#     product = ProductListing.get_one({'id': product_id})
#     recipient = User.get_one({'id': product.user_id})
#     messages = Message.get_messages_for_product(user.id, recipient.id, product.id)

#     return render_template('message.html', user=user, product=product, recipient=recipient, messages=messages)

@app.route('/message/product/<int:product_id>', methods=['GET'])
def view_product_messages(product_id):
    if not 'user_id' in session:
        return redirect('/')

    user = User.get_one({'id': session['user_id']})
    product = ProductListing.get_one({'id': product_id})
    recipient = User.get_one({'id': product.user_id})
    messages = Message.get_messages_for_product(user.id, recipient.id, product.id)

    # Fetch all conversations for the current user
    conversations = Message.get_conversations_for_user(user.id)

    return render_template('message.html', user=user, product=product, recipient=recipient, messages=messages, conversations=conversations)


@app.route('/message/product/<int:product_id>/send', methods=['POST'])
def send_product_message(product_id):
    if not 'user_id' in session:
        return redirect('/')

    sender_id = session['user_id']
    recipient_id = request.form['recipient_id']
    content = request.form['content']

    data = {
        'sender_id': sender_id,
        'recipient_id': recipient_id,
        'product_id': product_id,
        'content': content,
    }

    Message.save(data)
    flash('Message sent successfully', 'success')
    return redirect(f'/message/product/{product_id}')

