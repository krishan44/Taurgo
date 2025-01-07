from flask_sqlalchemy import SQLAlchemy

# Initialize SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    loginid = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<User {self.loginid}>'

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


class CompanyDetails(db.Model):
    __tablename__ = 'companydetails'

    clientid = db.Column(db.Integer, db.ForeignKey('clientregister.clientid'), primary_key=True)
    companyname = db.Column(db.String(255), nullable=False)
    companyfullname = db.Column(db.String(255), nullable=False)
    businesstype = db.Column(db.String(255))
    companyemail = db.Column(db.String(255))
    companycontact = db.Column(db.String(50))

    client = db.relationship('ClientRegister', backref=db.backref('company_details', lazy=True))

    def __repr__(self):
        return f'<CompanyDetails {self.clientid}>'

class CompanyAddress(db.Model):
    __tablename__ = 'companyaddress'

    clientid = db.Column(db.Integer, db.ForeignKey('companydetails.clientid'), primary_key=True)
    postcode = db.Column(db.String(20))
    addresslineone = db.Column(db.String(255))
    addresslinetwo = db.Column(db.String(255))
    city = db.Column(db.String(100))
    province = db.Column(db.String(100))
    country = db.Column(db.String(100))
    companylogo = db.Column(db.LargeBinary)

    company = db.relationship('CompanyDetails', backref=db.backref('addresses', lazy=True))

    def __repr__(self):
        return f'<CompanyAddress {self.clientid}>'

class ClientBooking(db.Model):
    __tablename__ = 'clientbooking'

    clientid = db.Column(db.Integer, db.ForeignKey('clientregister.clientid'), primary_key=True)
    bookingid = db.Column(db.Integer, primary_key=True)
    norentalprop = db.Column(db.Integer)
    servicerequired = db.Column(db.String(255))
    frequencyofreport = db.Column(db.String(255))
    deliverytype = db.Column(db.String(255))
    addinfo = db.Column(db.String(255))
    paymentmethod = db.Column(db.String(50))
    salesmonth = db.Column(db.Integer)

    client = db.relationship('ClientRegister', backref=db.backref('bookings', lazy=True))

    def __repr__(self):
        return f'<ClientBooking {self.bookingid}>'

class PartnerRegister(db.Model):
    __tablename__ = 'partnerregister'

    partnerid = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    loginid = db.Column(db.Integer, db.ForeignKey('users.loginid'))

    user = db.relationship('User', backref=db.backref('partners', lazy=True))

    def __repr__(self):
        return f'<Partner {self.partnerid}>'

class PartnerExperience(db.Model):
    __tablename__ = 'partnerexperience'

    partnerid = db.Column(db.Integer, db.ForeignKey('partnerregister.partnerid'), primary_key=True)
    experience = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('experience', lazy=True))

    def __repr__(self):
        return f'<PartnerExperience {self.partnerid}>'

class PartnerDetails(db.Model):
    __tablename__ = 'partnerdetails'

    partnerid = db.Column(db.Integer, db.ForeignKey('partnerregister.partnerid'), primary_key=True)
    firstname = db.Column(db.String(255))
    lastname = db.Column(db.String(255))
    title = db.Column(db.String(50))
    dateofbirth = db.Column(db.Date)
    gender = db.Column(db.String(50))
    email = db.Column(db.String(255))
    phone = db.Column(db.String(20))
    proofid = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('details', lazy=True))

    def __repr__(self):
        return f'<PartnerDetails {self.partnerid}>'

class PartnerAddress(db.Model):
    __tablename__ = 'partneraddress'

    partnerid = db.Column(db.Integer, db.ForeignKey('partnerregister.partnerid'), primary_key=True)
    postcode = db.Column(db.String(20))
    addressone = db.Column(db.String(255))
    addresstwo = db.Column(db.String(255))
    city = db.Column(db.String(100))
    province = db.Column(db.String(100))
    country = db.Column(db.String(100))
    datejoined = db.Column(db.DateTime)
    proofaddress = db.Column(db.LargeBinary)

    partner = db.relationship('PartnerRegister', backref=db.backref('address', lazy=True))

    def __repr__(self):
        return f'<PartnerAddress {self.partnerid}>'

class PartnerProfDetails(db.Model):
    __tablename__ = 'partnerprofdetails'

    partnerid = db.Column(db.Integer, db.ForeignKey('partnerregister.partnerid'), primary_key=True)
    cv = db.Column(db.LargeBinary)
    dbs = db.Column(db.LargeBinary)
    insurance = db.Column(db.LargeBinary)
    wishfortaurgosupplied = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('professional_details', lazy=True))

    def __repr__(self):
        return f'<PartnerProfDetails {self.partnerid}>'
