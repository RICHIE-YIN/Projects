from flask_app import app, render_template, redirect, session, request, flash
from flask_app.models.userprofile import UserProfile

@app.route('/profile/<int:user_id>')
def profile(user_id):
    user = UserProfile.get_one({'id': user_id})
    if user:
        return render_template('profile.html', user=user)
    flash("User not found.")
    return redirect('/')

@app.route('/profile/new')
def new_profile():
    return render_template('create_user_profile.html')

@app.route('/profile/create', methods=['POST'])
def create_profile():
    if 'user_id' not in session:
        return redirect('/logout')
    profile_data = {
        'user_id': session['user_id'],
        'bio': request.form['bio'],
        'location': request.form['location'],
        'profile_name': request.form['profile_name'],
        'email': request.form['email'],
        'phone': request.form['phone']
    }
    if 'profile_picture' in request.files:
        profile_picture = request.files['profile_picture']
        if profile_picture.filename:
            profile_data['profile_picture'] = profile_picture.read()
    UserProfile.create(profile_data)
    return redirect('/profile/' + str(session['user_id']))

@app.route('/profile/edit')
def edit_profile():
    if 'user_id' not in session:
        return redirect('/logout')
    user = UserProfile.get_one({'id': session['user_id']})
    if not user:
        flash("User not found.")
        return redirect('/')
    return render_template('edit_profile.html', user=user)

@app.route('/profile/update', methods=['POST'])
def update_profile():
    if 'user_id' not in session:
        return redirect('/logout')
    user = UserProfile.get_one({'id': session['user_id']})
    if not user:
        flash("User not found.")
        return redirect('/')
    user_data = {
        'id': session['user_id'],
        'bio': request.form['bio'],
        'location': request.form['location'],
        'profile_name': request.form['profile_name'],
        'email': request.form['email'],
        'phone': request.form['phone']
    }
    if 'profile_picture' in request.files:
        profile_picture = request.files['profile_picture']
        if profile_picture.filename:
            user_data['profile_picture'] = profile_picture.read()
    UserProfile.update(user_data)
    return redirect('/profile/' + str(session['user_id']))


