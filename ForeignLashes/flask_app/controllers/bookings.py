from flask_app import app
from flask import Flask, render_template, request, redirect
from flask_app.models.booking import Service

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/login')
def loginpage():
    return render_template('login.html')

@app.route('/aboutme')
def about_me():
    return render_template('about_me.html')

@app.route('/services')
def services():
    return render_template('services.html', services = Service.get_all())

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/bookings')
def bookings():
    return render_template('bookings.html')

@app.route('/services/create', methods = ['POST'])
def create_service():
    Service.save(request.form)
    return redirect('/services')

@app.route('/services/update', methods = ['POST'])
def update_service():
    Service.update(request.form) #else updates
    return redirect ('/services')

@app.route('/services/delete/<int:id>')
def delete(id):
    data ={
        'id': id
    }
    Service.delete(data)
    return redirect('/services')