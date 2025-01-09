import base64
from flask import Flask, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
from flask_cors import CORS
from datetime import timedelta
from models import db, User, ClientRegister, CompanyDetails, CompanyAddress, ClientBooking,PartnerRegister,PartnerExperience,PartnerDetails,PartnerAddress,PartnerProfDetails
import os



# Initialize Flask and SQLAlchemy
app = Flask(__name__)
app.secret_key = 'Abcc121#32'  # Required for sessions
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/Taurgo'  # Database URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/client-register": {"origins": "http://localhost:5173"}})
CORS(app, resources={r"/company-details": {"origins": "http://localhost:5173"}})
db = SQLAlchemy(app)
app.permanent_session_lifetime = timedelta(days=7)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'png'}


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
    db.session.commit()

    # Set the clientid in session and make it permanent
    session['clientid'] = new_client.clientid
    session.permanent = True  # Ensure session persists across requests

    # Return a response
    return jsonify({
        'message': 'Client registered successfully!',
        'user': {'loginid': new_user.loginid, 'email': new_user.email},
        'client': {'clientid': new_client.clientid, 'orgname': new_client.orgname}
    }), 201


# Register company details route
@app.route('/company-details', methods=['POST'])
def register_company_details():
    try:
        # Get the last registered client (most recent entry)
        client = ClientRegister.query.order_by(ClientRegister.clientid.desc()).first()

        if not client:
            return jsonify({'error': 'No client found. Please register a client first.'}), 400

        # Use the clientid of the last registered client
        clientid = client.clientid

        # Parse JSON data
        data = request.get_json()
        print("Received data:", data)

        # Extract fields from the request
        companyname = data.get('companyName')
        companyfullname = data.get('fullName')
        businesstype = data.get('businessType')
        companyemail = data.get('email')
        companycontact = data.get('phone')

        # Validate required fields
        if not companyname or not companyfullname or not companyemail:
            return jsonify({'error': 'Company name, company full name, and company email are required!'}), 400

        # Check for duplicate company details for the same client
        existing_company = CompanyDetails.query.filter_by(clientid=clientid).first()
        if existing_company:
            return jsonify({'error': 'Company details for this client already exist!'}), 400

        # Add new company details
        company_details = CompanyDetails(
            clientid=clientid,
            companyname=companyname,
            companyfullname=companyfullname,
            businesstype=businesstype,
            companyemail=companyemail,  # Provided in the request
            companycontact=companycontact
        )

        # Add the new company details to the session and commit
        db.session.add(company_details)
        db.session.commit()

        # Return success response with company details
        return jsonify({
            'message': 'Company details registered successfully!',
            'company_details': {
                'clientid': company_details.clientid,
                'companyname': company_details.companyname,
                'companyfullname': company_details.companyfullname,
                'businesstype': company_details.businesstype,
                'companyemail': company_details.companyemail,
                'companycontact': company_details.companycontact
            }
        }), 201

    except Exception as e:
        # Rollback any changes if an error occurs
        db.session.rollback()
        print("Error:", str(e))  # Debugging for errors
        return jsonify({'error': 'An error occurred while processing your request.'}), 500

def save_base64_image(base64_data):
    # Decode the base64 data into binary
    image_data = base64.b64decode(base64_data)
    return image_data

    # Save the decoded image to the specified file
    with open(os.path.join(app.config['UPLOAD_FOLDER'], filename), 'wb') as img_file:
        img_file.write(image_data)


@app.route('/company-address', methods=['POST'])
def register_company_address():
    try:
        # Accessing JSON data
        data = request.get_json()
        print(data)

        postcode = data.get('postcode')
        address1 = data.get('address1')
        address2 = data.get('address2')
        city = data.get('city')
        province = data.get('province')
        country = data.get('country')
        logo_base64 = data.get('logo')

        # Validate all required fields
        if not postcode or not address1 or not address2 or not city or not province or not country or not logo_base64:
            return jsonify({'error': 'All fields must be filled, including the logo!'}), 400


        # Save the base64-encoded logo to a file
        logo_binary = save_base64_image(logo_base64)

        # Get the most recent client (same as before)
        client = ClientRegister.query.order_by(ClientRegister.clientid.desc()).first()

        if not client:
            return jsonify({'error': 'No client found. Please register a client first.'}), 400

        clientid = client.clientid

        # Create a new CompanyAddress instance
        company_address = CompanyAddress(
            clientid=clientid,
            postcode=postcode,
            addresslineone=address1,
            addresslinetwo=address2,
            city=city,
            province=province,
            country=country,
            companylogo=logo_binary  #  Storing the binary data
        )

        # Add the new company address to the session and commit
        db.session.add(company_address)
        db.session.commit()

        # Return success response with company details
        return jsonify({
            'message': 'Company details registered successfully!',
            'company_data': {
                'postcode': postcode,
                'address1': address1,
                'address2': address2,
                'city': city,
                'province': province,
                'country': country,
            }
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/submit_booking', methods=['POST'])
def submit_booking():
    try:
        # Get the JSON data from the frontend
        data = request.get_json()
        print("Received data:", data)

        # Extract data
        norentalprop = data.get('rentalProperties')
        salesmonth = data.get('salesProperties')
        servicerequired = ', '.join(data.get('serviceRequirements', []))
        frequencyofreport = data.get('frequency')
        deliverytype = data.get('deliveryMethod')
        addinfo = data.get('additionalInfo', '')
        paymentmethod = (
            'Invoice' if data.get('paymentMethod', {}).get('invoice') else
            'Card' if data.get('paymentMethod', {}).get('card') else ''
        )

        # Fetch the latest client
        client = ClientRegister.query.order_by(ClientRegister.clientid.desc()).first()

        if not client:
            return jsonify({'error': 'No client found. Please register a client first.'}), 400

        clientid = client.clientid

        # Create a new booking
        new_booking = ClientBooking(
            clientid=clientid,
            norentalprop=norentalprop,
            salesmonth=salesmonth,
            servicerequired=servicerequired,
            frequencyofreport=frequencyofreport,
            deliverytype=deliverytype,
            addinfo=addinfo,
            paymentmethod=paymentmethod
        )

        # Add and commit the new booking
        db.session.add(new_booking)
        db.session.commit()

        # Fetch and verify the committed booking
        saved_booking = ClientBooking.query.filter_by(clientid=clientid, bookingid=new_booking.bookingid).first()

        if not saved_booking:
            return jsonify({"error": "Booking could not be verified after saving."}), 500

        # Return success response
        return jsonify({
            "message": "Booking successfully created!",
            "booking": {
                "bookingid": saved_booking.bookingid,
                "norentalprop": saved_booking.norentalprop,
                "salesmonth": saved_booking.salesmonth,
                "servicerequired": saved_booking.servicerequired,
                "frequencyofreport": saved_booking.frequencyofreport,
                "deliverytype": saved_booking.deliverytype,
                "addinfo": saved_booking.addinfo,
                "paymentmethod": saved_booking.paymentmethod,
            }
        }), 201

    except Exception as e:
        db.session.rollback()  # Rollback any pending changes
        print("Error in submit_booking:", str(e))  # Debugging log
        return jsonify({"error": "An error occurred while processing the booking.", "details": str(e)}), 500


# Run the Flask app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)
