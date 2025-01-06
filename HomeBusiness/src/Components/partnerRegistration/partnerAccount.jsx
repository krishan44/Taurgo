import React, { useState } from 'react';
import style from "./partnerAccount.module.css"
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png";
import loginPhoto from "../../assets/loginPage/loginPhoto.jpeg";
import RICS from "../../assets/loginPage/RICS.png";
import { Link, useNavigate } from 'react-router-dom';

function PartnerAccount() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [error, setError] = useState('');

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Clear error on change
    };

    // Validate form data
    const validateForm = () => {
        if (!formData.fullName) return 'Full Name is required';
        if (!formData.email) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Enter a valid email address';
        if (!formData.password) return 'Password is required';
        if (formData.password !== formData.repeatPassword) return 'Passwords do not match';
        return '';
    };

    // Handle form submission
    const handleRegister = () => {
        const validationError = validateForm();
        if (!validationError) {
            navigate('/partner-expertise'); // Navigate to PartnerExpertise component
        } else {
            setError(validationError);
        }
    };

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.inputContainer}>
                    <img src={logoTaurgo} alt="Logo" className={style.logo} /> 
                    <div className={style.loginFields}>
                        <div className={style.changeBtns}>
                            <Link to="/client-register">
                                <button className={style.btnClient}>Register as a Client</button>
                            </Link>
                            <Link to="/register">
                                <button className={style.btnPartner}>Register as a Partner</button>
                            </Link>
                        </div>
                        <h2>Create your Account</h2>
                        {error && <p className={style.error}>{error}</p>} {/* Display error message */}
                        <span className={style.fieldName}>Full Name</span>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder='Your Name' 
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                        <span className={style.fieldName}>Email</span>
                        <input 
                            type="text" 
                            name="email"
                            placeholder='Enter your Email' 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <span className={style.fieldName}>Password</span>
                        <input 
                            type="password" 
                            name="password"
                            placeholder='••••••••' 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <span className={style.fieldName}>Repeat Password</span>
                        <input 
                            type="password" 
                            name="repeatPassword"
                            placeholder='••••••••' 
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            required
                        />
                        <button className={style.signinBtn} onClick={handleRegister}>Register</button>
                        <span className={style.registerText}>I have an Account? 
                            <Link to="/login">Login</Link>
                        </span>
                    </div>
                </div>
                <div className={style.bottomElements}>
                    <span className={style.copyright}>© Taurgo</span>
                    <img src={RICS} alt="Tech Partner Logo" className={style.techPartner}/>
                </div>
                <div className={style.imageContainer}>
                    <img src={loginPhoto} alt="Houses" className={style.loginPhoto} />
                </div>
            </div>
        </>
    );
}

export default PartnerAccount;
