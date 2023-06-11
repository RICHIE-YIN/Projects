from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_url_path='/static')
app.secret_key = "tupac"

bcrypt = Bcrypt(app)