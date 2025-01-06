import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from "./createAccount.module.css";  
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png";
import loginPhoto from "../../assets/loginPage/loginPhoto.jpeg";
import RICS from "../../assets/loginPage/RICS.png";

function CreateAccount() {  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        organisation: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError(''); 
    };

    const handleRegister = async () => {
        const { organisation, email, password, repeatPassword } = formData;
    
        if (!organisation || !email || !password || !repeatPassword) {
            setError('All fields must be filled!');
            return;
        }
    
        if (password !== repeatPassword) {
            setError('Passwords do not match!');
            return;
        }
    
        // Send the data to the backend
        try {
            const response = await fetch('http://127.0.0.1:5000/client-register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    organisation,
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                navigate('/expertise'); // Navigate to expertise page
            } else {
                setError(result.message || 'Registration failed.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
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
                    <span className={style.fieldName}>Organisation Reference</span>
                    <input 
                        type="text" 
                        placeholder='Organisation name' 
                        name="organisation" 
                        value={formData.organisation}
                        onChange={handleChange}
                        required 
                    />
                    <span className={style.fieldName}>Email</span>
                    <input 
                        type="text" 
                        placeholder='Enter your Email' 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <span className={style.fieldName}>Password</span>
                    <input 
                        type="password" 
                        placeholder='••••••••' 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span className={style.fieldName}>Repeat Password</span>
                    <input 
                        type="password" 
                        placeholder='••••••••' 
                        name="repeatPassword" 
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                    />
                
                    <button 
                        className={style.signinBtn} 
                        onClick={handleRegister}
                    >
                        Register
                    </button>
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
    );
}

export default CreateAccount;
