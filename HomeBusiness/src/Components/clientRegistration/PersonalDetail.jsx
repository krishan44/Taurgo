import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './personalDetail.module.css';

function PersonalDetail() {
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

    // Handle Next button click
    const handleNext = () => {
        const { companyName, fullName, email, phone } = formData;

        // Check if any field is empty
        if (!companyName || !fullName || !email || !phone) {
            setError('All fields must be filled!');
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Enter a valid email address!');
            return;
        }

        // Validate phone number format (numeric only)
        if (!/^\d+$/.test(phone)) {
            setError('Enter a valid phone number!');
            return;
        }

        // Navigate to the next step if validation passes
        navigate('/company-address'); // Replace with your desired route
    };

    return (
        <>
            <div className={style.personalDetials}>
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
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
