from flask_app import app, render_template, redirect, session, request
from flask_app.models.productlisting import ProductListing

@app.route('/listings')
def listings():
    if 'user_id' not in session:
        return redirect('/logout')
    return render_template('listings.html', listings = ProductListing.get_all())

@app.route('/listings/new')
def new_listing():
    return render_template('create_listing.html')

@app.route('/listings/create', methods = ['POST'])
def create_listing():
    print(request.form)
    if not ProductListing.validate_listing(request.form):
        return redirect('/listings/new')
    ProductListing.save(request.form)
    return redirect('/listings')

@app.route('/listings/<int:id>')
def show_listing(id):
    data = {'id': id}
    return render_template("show_listing.html", listing = ProductListing.get_one(data))

@app.route("/listings/edit/<int:id>")
def edit_listing(id):
    data = {'id': id}
    return render_template("edit_listing.html", listing = ProductListing.get_one(data))
