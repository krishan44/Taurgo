import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './addressDetail.module.css';
import searchIcon from "../../assets/icons/search.png"; 
import attachIcon from "../../assets/icons/attach.png"; 
import arrow from "../../assets/icons/arrow.png"; 
import infoIcon from "../../assets/icons/warning.png"; 

function AddressDetail() {
    const navigate = useNavigate();

    const countryOptions = [
        { code: 'UK', name: 'United Kingdom' },
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'AU', name: 'Australia' }
    ];

    // Track the form inputs
    const [formData, setFormData] = useState({
        postcode: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        country: '',
        logo: null,
        logoName: '', // Add a field to store the file name
    });

    const [error, setError] = useState('');

    // Check if all required fields are filled
    const isFormValid = () => {
        return (
            formData.postcode && 
            formData.address1 && 
            formData.address2 && 
            formData.city && 
            formData.province && 
            formData.country && 
            formData.logo
        );
    };

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Clear error on change
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            logo: file,
            logoName: file.name // Store the file name
        });
        setError(''); // Clear error on change
    };

    const handleNext = () => {
        if (isFormValid()) {
            navigate('/more-details');
        } else {
            setError('Please fill in all required fields and upload the logo.');
        }
    };

    const handleGoBack = () => {
        navigate('/personal-details');
    };

    return (
        <>
            <div className={style.addressDetails}>
                {error && <p className={style.error}>{error}</p>} {/* Display error message */}
                <div className={style.pageHeader}>
                    <div><span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span></div>
                    <div><span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span></div>
                    <div><span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span></div>
                    <div><span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span></div>
                    <div><span className={style.number}>5 </span><span>Onboarding Form Complete</span></div>
                </div>

                <div className={style.Details}>
                    <span className={style.step}>Step 1/2</span>
                    <div className={style.fields}>
                        <span className={style.title}>Company Address</span>
                        <div className={style.inputGrid}>
                            <div>
                                <span className={style.fieldName}>Postcode</span>
                                <br />
                                <div className={style.searchContainer}>
                                    <input 
                                        type="text" 
                                        name="postcode"
                                        value={formData.postcode}
                                        onChange={handleChange}
                                        className={style.datafield}  
                                        placeholder="Search Postcode" 
                                        required 
                                    />
                                    <a href="#" className={style.searchIconLink}>
                                        <img src={searchIcon} alt="search" className={style.searchIcon} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <span className={style.fieldName}>Address Line 1</span>
                                <br />
                                <input 
                                    type="text" 
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleChange}
                                    className={style.datafield}  
                                    placeholder="Address 1" 
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>Address Line 2</span>
                                <br />
                                <input 
                                    type="text" 
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                    className={style.datafield}  
                                    placeholder="Address 2" 
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>Town/City</span>
                                <br />
                                <input 
                                    type="text" 
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={style.datafield}  
                                    placeholder="City" 
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>Province</span>
                                <br />
                                <input 
                                    type="text" 
                                    name="province"
                                    value={formData.province}
                                    onChange={handleChange}
                                    className={style.datafield}  
                                    placeholder="Province" 
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>Country</span>
                                <br />
                                <select 
                                    className={style.Combodatafield} 
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled style={{ color: "#AEAEAE" }}>Country</option>
                                    {countryOptions.map((country) => (
                                        <option key={country.code} value={country.code}>{country.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={style.attachField}>
                            <div className={style.fieldHeader}>
                                <span className={style.fieldName}>Upload Company Logo here</span>
                                <div className={style.tooltipContainer}>
                                    <img 
                                        src={infoIcon} 
                                        alt="info" 
                                        className={style.infoIcon} 
                                    />
                                    <span className={style.tooltip}>This will be used to brand all our projects with.</span>
                                </div>
                            </div>
                            <div className={style.fileUploadContainer}>
                                <input 
                                    type="file" 
                                    className={style.attachFile}
                                    id="fileInput"
                                    accept=".png"
                                    onChange={handleFileChange}
                                    required 
                                />
                                <label htmlFor="fileInput" className={style.customFileUpload}>
                                    <img src={attachIcon} alt="attach" className={style.attachIcon} />
                                    <span>{formData.logoName || 'Upload logo in (.png) format'}</span> {/* Display the file name */}
                                </label>
                            </div>
                        </div>

                        <div className={style.btnContainer}>
                            <button 
                                className={style.goBack} 
                                onClick={handleGoBack}
                            >
                                <img src={arrow} alt="Back" /> Go Back
                            </button>
                            <button 
                                className={style.btnNext} 
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
}

export default AddressDetail;
