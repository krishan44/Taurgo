CREATE DATABASE taurgo_db;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE partner_details (
  partner_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  title VARCHAR(10),
  dob DATE,
  gender VARCHAR(10),
  phone VARCHAR(20)
);

CREATE TABLE partner_expertise (
  expertise_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  expertise_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE company_address (
  address_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  province VARCHAR(100),
  country VARCHAR(100),
  postcode VARCHAR(20)
);
