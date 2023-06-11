from flask_app import app, render_template, redirect, session, request
from flask_app.models.productlisting import ProductListing

@app.route('/listings')
def listings():
    if 'user_id' not in session:
        return redirect('/logout')
    return render_template('listings.html', listings = ProductListing.get_all())

@app.route('/listings/new')
def new_listing():
    return render_template('new_listing.html')

@app.route('/listings/create', methods=['POST'])
def create_listing():
    if 'user_id' not in session:
        return redirect('/logout')
    if not ProductListing.validate_listing(request.form):
        return redirect('/listings/new')
    
    image_data = None
    if 'image' in request.files:
        image_file = request.files['image']
        if image_file.filename:
            image_data = image_file.read()
    
    data = {
        "title": request.form['title'],
        "description": request.form['description'],
        "price": float(request.form['price']),
        "condition": request.form['condition'],
        "category": request.form['category'],
        "location": request.form['location'],
        "zip": request.form['zip'],
        "city": request.form['city'],
        "state": request.form['state'],
        "status": "active",
        "user_id": session['user_id']
    }
    
    ProductListing.save(data, image_data)
    return redirect('/listings')

@app.route('/listings/<int:id>')
def show_listing(id):
    data = {'id': id}
    return render_template("show_listing.html", listing = ProductListing.get_one(data))

@app.route("/listings/edit/<int:id>")
def edit_listing(id):
    data = {'id': id}
    return render_template("edit_listing.html", listing = ProductListing.get_one(data))
    
@app.route('/listings/update', methods=["POST"])
def update_listing():
    if 'user_id' not in session:
        return redirect('/logout')
    
    if not ProductListing.validate_listing(request.form):
        return redirect(f"/listings/edit/{request.form['id']}")

    image_data = None
    if 'image' in request.files:
        image_file = request.files['image']
        if image_file.filename:
            image_data = image_file.read()

    data = {
        "id": request.form['id'],
        "title": request.form['title'],
        "description": request.form['description'],
        "price": float(request.form['price']),
        "condition": request.form['condition'],
        "category": request.form['category'],
        "location": request.form['location'],
        "zip": request.form['zip'],
        "city": request.form['city'],
        "state": request.form['state'],
        "status": request.form['status'],
    }

    ProductListing.update(data, image_data)
    return redirect('/listings')

@app.route('/listings/delete/<int:id>')
def delete_listing(id):
    if 'user_id' not in session:
        return redirect('/logout')

    data = {'id': id}
    ProductListing.delete(data)
    return redirect('/listings')
