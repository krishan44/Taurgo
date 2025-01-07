import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './personalDetail.module.css';

function PersonalDetail() {
    const location = useLocation();
    const selectedBusiness = location.state?.selectedBusiness || '';

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        companyName: '',
        fullName: '',
        email: '',
        phone: ''
    });

    const [error, setError] = useState('');

    // Update formData when inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(''); // Clear the error message when the user types
    };

    const handleNext = async () => {
        const { companyName, fullName, email, phone } = formData;
    
        // Validate all fields
        if (!companyName || !fullName || !email || !phone) {
            setError('All fields must be filled!');
            return;
        }
    
        if (!selectedBusiness) {
            setError('Business type is missing! Please go back and select a business type.');
            return;
        }
    
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Enter a valid email address!');
            return;
        }
    
        if (!/^\d+$/.test(phone)) {
            setError('Enter a valid phone number!');
            return;
        }
    
        const dataToSubmit = {
            companyName,
            fullName,
            email,
            phone,
            businessType: selectedBusiness
        };
    
        try {
            const response = await fetch('http://127.0.0.1:5000/company-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });
    
            // Check if the response is successful
            const result = await response.json();
    
            if (!response.ok) {
                setError(result.error || 'Failed to submit data. Please try again.');
                return;
            }
    
            // Navigate to next page upon successful submission
            navigate('/company-address');
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Failed to fetch data. Please check your network connection or server.');
        }
    };

    return (
        <>
            <div className={style.personalDetials}>
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your expertise <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>5 </span><span>Onboarding Form Complete</span> </div>
                </div>
                {error && <p className={style.error}>{error}</p>}
                <div className={style.Details}>
                    <span className={style.title}>Organisation Details</span>
                    <div className={style.inputGrid}>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Company Name<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input
                                type="text"
                                name="companyName"
                                className={style.datafield}
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Full Name<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input
                                type="text"
                                name="fullName"
                                className={style.datafield}
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Email<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input
                                type="text"
                                name="email"
                                className={style.datafield}
                                placeholder="hello@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Phone<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input
                                type="text"
                                name="phone"
                                className={style.datafield}
                                placeholder="Add your phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button className={style.btnNext} onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
}

export default PersonalDetail;
