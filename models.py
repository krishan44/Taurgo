from flask_sqlalchemy import SQLAlchemy

# Initialize SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    loginId = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<User {self.loginId}>'

class ClientRegister(db.Model):
    __tablename__ = 'clientRegister'

    ClientId = db.Column(db.Integer, primary_key=True)
    orgName = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    loginID = db.Column(db.Integer, db.ForeignKey('users.loginId'))

    user = db.relationship('User', backref=db.backref('clients', lazy=True))

    def __repr__(self):
        return f'<Client {self.ClientId}>'

class CompanyDetails(db.Model):
    __tablename__ = 'CompanyDetails'

    ClientId = db.Column(db.Integer, db.ForeignKey('clientRegister.ClientId'), primary_key=True)
    CompnayName = db.Column(db.String(255), nullable=False)
    CompanyFullName = db.Column(db.String(255), nullable=False)
    BusinessType = db.Column(db.String(255))
    CompanyEmail = db.Column(db.String(255))
    CompanyContact = db.Column(db.String(50))

    client = db.relationship('ClientRegister', backref=db.backref('company_details', lazy=True))

    def __repr__(self):
        return f'<CompanyDetails {self.ClientId}>'

class CompanyAddress(db.Model):
    __tablename__ = 'CompanyAddress'

    ClientID = db.Column(db.Integer, db.ForeignKey('CompanyDetails.ClientId'), primary_key=True)
    PostCode = db.Column(db.String(20))
    AddressLineOne = db.Column(db.String(255))
    AddressLineTwo = db.Column(db.String(255))
    City = db.Column(db.String(100))
    Province = db.Column(db.String(100))
    Country = db.Column(db.String(100))
    CompanyLogo = db.Column(db.LargeBinary)

    company = db.relationship('CompanyDetails', backref=db.backref('addresses', lazy=True))

    def __repr__(self):
        return f'<CompanyAddress {self.ClientID}>'

class ClientBooking(db.Model):
    __tablename__ = 'clientBooking'

    clientID = db.Column(db.Integer, db.ForeignKey('clientRegister.ClientId'), primary_key=True)
    BookingID = db.Column(db.Integer, primary_key=True)
    NoRentalProp = db.Column(db.Integer)
    salesMonth = db.Column(db.String(20))
    ServiceRequired = db.Column(db.String(255))
    FrequencyOfReport = db.Column(db.String(255))
    DeliveryType = db.Column(db.String(255))
    AddInfo = db.Column(db.String(255))
    PaymentMethod = db.Column(db.String(50))

    client = db.relationship('ClientRegister', backref=db.backref('bookings', lazy=True))

    def __repr__(self):
        return f'<ClientBooking {self.BookingID}>'

class PartnerRegister(db.Model):
    __tablename__ = 'partnerRegister'

    partnerID = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    loginID = db.Column(db.Integer, db.ForeignKey('users.loginId'))

    user = db.relationship('User', backref=db.backref('partners', lazy=True))

    def __repr__(self):
        return f'<Partner {self.partnerID}>'

class PartnerExperience(db.Model):
    __tablename__ = 'partnerExperience'

    partnerID = db.Column(db.Integer, db.ForeignKey('partnerRegister.partnerID'), primary_key=True)
    Experience = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('experience', lazy=True))

    def __repr__(self):
        return f'<PartnerExperience {self.partnerID}>'

class PartnerDetails(db.Model):
    __tablename__ = 'partnerDetails'

    partnerID = db.Column(db.Integer, db.ForeignKey('partnerRegister.partnerID'), primary_key=True)
    firstName = db.Column(db.String(255))
    lastName = db.Column(db.String(255))
    title = db.Column(db.String(50))
    DateofBirth = db.Column(db.Date)
    Gender = db.Column(db.String(50))
    Email = db.Column(db.String(255))
    Phone = db.Column(db.String(20))
    proofodID = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('details', lazy=True))

    def __repr__(self):
        return f'<PartnerDetails {self.partnerID}>'

class PartnerAddress(db.Model):
    __tablename__ = 'partnerAddress'

    partnerID = db.Column(db.Integer, db.ForeignKey('partnerRegister.partnerID'), primary_key=True)
    postcode = db.Column(db.String(20))
    addressOne = db.Column(db.String(255))
    addressTwo = db.Column(db.String(255))
    City = db.Column(db.String(100))
    province = db.Column(db.String(100))
    Country = db.Column(db.String(100))
    dateJoined = db.Column(db.DateTime)
    proofOfAddress = db.Column(db.LargeBinary)

    partner = db.relationship('PartnerRegister', backref=db.backref('address', lazy=True))

    def __repr__(self):
        return f'<PartnerAddress {self.partnerID}>'

class PartnerProfDetails(db.Model):
    __tablename__ = 'partnerProfDetails'

    partnerID = db.Column(db.Integer, db.ForeignKey('partnerRegister.partnerID'), primary_key=True)
    CV = db.Column(db.LargeBinary)
    DBS = db.Column(db.LargeBinary)
    Insurance = db.Column(db.LargeBinary)
    WishforTaurgoSupplied = db.Column(db.String(255))

    partner = db.relationship('PartnerRegister', backref=db.backref('professional_details', lazy=True))

    def __repr__(self):
        return f'<PartnerProfDetails {self.partnerID}>'
