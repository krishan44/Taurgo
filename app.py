from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import User, ClientRegister  # Import the User model

# Initialize the Flask application
app = Flask(__name__)

# Set up the database URI using the given database credentials
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/Taurgo'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # To avoid overhead

# Initialize SQLAlchemy with the app
db = SQLAlchemy(app)

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Flask API!"})

@app.route('/users', methods=['GET'])
def get_users():
    # Query the users table
    users = db.session.query(User).all()
    return jsonify([{'loginId': user.loginId, 'email': user.email, 'created_at': user.created_at} for user in users])

@app.route('/create_user', methods=['POST'])
def create_user():
    # Create a new user in the database (you would typically get this from request data)
    new_user = User(email='example@domain.com', password='password123')
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!', 'user': {'loginId': new_user.loginId, 'email': new_user.email}})

# Add more routes for other models as needed
@app.route('/clients', methods=['GET'])
def get_clients():
    clients = db.session.query(ClientRegister).all()
    return jsonify([{'ClientId': client.ClientId, 'orgName': client.orgName, 'email': client.email} for client in clients])

if __name__ == '__main__':
    app.run(debug=True)
