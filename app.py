from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
from flask_cors import CORS

# Initialize Flask and SQLAlchemy
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/Taurgo'  # Database URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/client-register": {"origins": "http://localhost:5173"}})
db = SQLAlchemy(app)

# User model (table: users)
class User(db.Model):
    __tablename__ = 'users'  # Table name in lowercase

    loginid = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<User {self.loginid}>'

# Client registration model (table: clientregister)
class ClientRegister(db.Model):
    __tablename__ = 'clientregister'

    clientid = db.Column(db.Integer, primary_key=True)
    orgname = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)  # Add email column
    password = db.Column(db.String(255), nullable=False)
    loginid = db.Column(db.Integer, db.ForeignKey('users.loginid'))  # Foreign key added

    user = db.relationship('User', backref=db.backref('clients', lazy=True))  # Relationship

    def __repr__(self):
        return f'<Client {self.clientid}>'


# Register route for clients
@app.route('/client-register', methods=['POST'])
def register_client():
    data = request.get_json()

    organisation = data.get('organisation')
    email = data.get('email')
    password = data.get('password')

    if not organisation or not email or not password:
        return jsonify({'message': 'All fields (organisation, email, password) are required!'}), 400

    password_hash = generate_password_hash(password)

    # Step 1: Create a new User entry in the 'users' table
    new_user = User(email=email, password=password_hash)
    db.session.add(new_user)
    db.session.commit()

    # Step 2: Create a new ClientRegister entry in the 'clientregister' table
    new_client = ClientRegister(orgname=organisation, email=email, password=password_hash, loginid=new_user.loginid)
    db.session.add(new_client)

    # Commit the transaction
    db.session.commit()

    # Return a response
    return jsonify({
        'message': 'Client registered successfully!',
        'user': {'loginid': new_user.loginid, 'email': new_user.email},
        'client': {'clientid': new_client.clientid, 'orgname': new_client.orgname}
    }), 201

# Run the Flask app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)