from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.message import Message
from flask_app.models.user import User
from flask_app.models.productlisting import ProductListing

@app.route('/message/product/<int:product_id>', methods=['GET'])
def view_product_messages(product_id):
    if not 'user_id' in session:
        return redirect('/')

    user = User.get_one({'id': session['user_id']})
    product = ProductListing.get_one({'id': product_id})
    recipient = User.get_one({'id': product.user_id})
    messages = Message.get_messages_for_product(user.id, recipient.id, product.id)

    return render_template('message.html', user=user, product=product, recipient=recipient, messages=messages)


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

#     # Use the new method to get all messages for a product
#     messages = Message.get_all_messages_for_product(product.id)

#     return render_template('message.html', user=user, product=product, recipient=recipient, messages=messages)


@app.route('/message/sender/<int:sender_id>/recipient/<int:recipient_id>/product/<int:product_id>', methods=['GET'])
def view_messages_between_sender_and_recipient(sender_id, recipient_id, product_id):
    if not 'user_id' in session:
        return redirect('/')

    user = User.get_one({'id': session['user_id']})
    product = ProductListing.get_one({'id': product_id})
    sender = User.get_one({'id': sender_id})
    recipient = User.get_one({'id': recipient_id})

    # Use the new method to get all messages between a sender and recipient for a specific product
    messages = Message.get_messages_between_sender_and_recipient(sender.id, recipient.id, product.id)

    return render_template('message_between_users.html', user=user, product=product, sender=sender, recipient=recipient, messages=messages)

@app.route('/message/product/<int:product_id>/conversation/<int:sender_id>/<int:recipient_id>', methods=['GET'])
def view_conversation_between_users(product_id, sender_id, recipient_id):
    if not 'user_id' in session:
        return redirect('/')

    user = User.get_one({'id': session['user_id']})
    product = ProductListing.get_one({'id': product_id})
    sender = User.get_one({'id': sender_id})
    recipient = User.get_one({'id': recipient_id})
    messages = Message.get_conversation_between_users(sender_id, recipient_id, product_id)

    return render_template('message_between_users.html', user=user, product=product, sender=sender, recipient=recipient, messages=messages)

@app.route('/message/product/<int:product_id>/user/<int:recipient_id>', methods=['GET'])
def view_product_messages_between_users(product_id, recipient_id):
    if not 'user_id' in session:
        return redirect('/')

    user = User.get_one({'id': session['user_id']})
    product = ProductListing.get_one({'id': product_id})
    recipient = User.get_one({'id': recipient_id})
    messages = Message.get_messages_between_users_for_product(user.id, recipient.id, product.id)

    return render_template('message_between_users.html', user=user, product=product, recipient=recipient, messages=messages)
