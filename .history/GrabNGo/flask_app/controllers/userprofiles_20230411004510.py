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
def new_userprofile():
    return render_template('create_user_profile.html')

@app.route('/userprofile/create', methods=['POST'])
def create_userprofile():
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