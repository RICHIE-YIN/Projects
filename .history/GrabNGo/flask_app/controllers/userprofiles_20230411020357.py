from flask_app import app, render_template, redirect, session, request, flash
from flask_app.models.userprofile import UserProfile

@app.route('/userprofile')
def userprofile():
    if 'user_id' not in session:
        return redirect('/logout')
    profile = UserProfile.get_one({"user_id": session['user_id']})
    if not profile:
        return redirect('/userprofile/new')
    return render_template('userprofile.html', profile=profile)

@app.route('/profile/new')
def newprofile():
    return render_template('create_user_profile.html')

@app.route('/userprofile/create', methods=['POST'])
def createprofile():
    if 'user_id' not in session:
        return redirect('/logout')
    if not UserProfile.validate_profile(request.form):
        return redirect('/userprofile/new')

    profile_picture_data = None
    if 'profile_picture' in request.files:
        profile_picture_file = request.files['profile_picture']
        if profile_picture_file.filename:
            profile_picture_data = profile_picture_file.read()

    data = {
        "bio": request.form['bio'],
        "location": request.form['location'],
        "profile_name": request.form['profile_name'],
        "email": request.form['email'],
        "phone": request.form['phone'],
        "user_id": session['user_id']
    }

    UserProfile.create(data, profile_picture_data)
    return redirect('/userprofile')

@app.route('/profile/view/<int:user_id>')
def viewprofile(user_id):
    profile = UserProfile.get_one({"user_id": user_id})
    if not profile:
        flash("Profile not found.")
        return redirect('/userprofile')

    return render_template('viewprofile.html', profile=profile)

@app.route("/userprofile/edit/<int:user_id>")
def edit_user_profile(user_id):
    data = {'user_id': user_id}
    return render_template("edit_user_profile.html", user_profile=UserProfile.get_one(data))

@app.route('/userprofile/update', methods=["POST"])
def update_user_profile():
    if 'user_id' not in session:
        return redirect('/logout')

    if not UserProfile.validate_profile(request.form):
        return redirect(f"/userprofile/edit/{request.form['user_id']}")

    profile_picture_data = None
    if 'profile_picture' in request.files:
        profile_picture_file = request.files['profile_picture']
        if profile_picture_file.filename:
            profile_picture_data = profile_picture_file.read()

    data = {
        "user_id": request.form['user_id'],
        "bio": request.form['bio'],
        "location": request.form['location'],
        "profile_name": request.form['profile_name'],
        "email": request.form['email'],
        "phone": request.form['phone']
    }

    UserProfile.update(data, profile_picture_data)
    return redirect('/userprofile')
