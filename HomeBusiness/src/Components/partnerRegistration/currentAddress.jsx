import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './currentAddress.module.css';
import searchIcon from "../../assets/icons/search.png"; 
import attachIcon from "../../assets/icons/attach.png"; 
import arrow from "../../assets/icons/arrow.png"; 
import infoIcon from "../../assets/icons/warning.png"; 
import Calendar from './calender';

function CurrentAddress() {
    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [formData, setFormData] = useState({
        postcode: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        country: '',
        proofOfAddress: null,
        proofOfAddressName: ''
    });
    const [error, setError] = useState('');

    const handleDateClick = () => {
        setShowCalendar(true);
    };

    const handleDateSelect = (date) => {
        if (date) {
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const year = date.getFullYear();
            setBirthDate(`${month} - ${day} - ${year}`);
        }
        setShowCalendar(false);
    };

    const handleCalendarCancel = () => {
        setShowCalendar(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Clear error on change
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            proofOfAddress: file,
            proofOfAddressName: file.name // Store the file name
        });
        setError(''); // Clear error on change
    };

    const validateForm = () => {
        if (!formData.postcode) return 'Postcode is required';
        if (!formData.address1) return 'Address Line 1 is required';
        if (!formData.address2) return 'Address Line 2 is required';
        if (!formData.city) return 'City is required';
        if (!formData.province) return 'Province is required';
        if (!formData.country) return 'Country is required';
        if (!birthDate) return 'Date Moved In is required';
        if (!formData.proofOfAddress) return 'Proof of Address is required';
        return '';
    };

    const handleNext = () => {
        const validationError = validateForm();
        if (!validationError) {
            navigate('/attachments'); // Navigate to the next step
        } else {
            setError(validationError);
        }
    };

    const handleGoBack = () => {
        navigate('/detail-partner');
    };

    return(
        <>
            <div className={style.addressDetails}>
                {error && <div className={style.error}>{error}</div>} {/* Display error message */}
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
                </div>

                <div className={style.Details}>
                    <div className={style.fields}>
                        <span className={style.title}>Company Address</span>
                        <div className={style.inputGrid}>
                            <div>
                                <span className={style.fieldName}>
                                    Postcode
                                </span>
                                <br />
                                <div className={style.searchContainer}>
                                    <input 
                                        type="text" 
                                        name="postcode"
                                        className={style.datafield}  
                                        placeholder='Search Postcode' 
                                        value={formData.postcode}
                                        onChange={handleChange}
                                        required 
                                    />
                                    <a href="#" className={style.searchIconLink}>
                                        <img src={searchIcon} alt="search" className={style.searchIcon} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Address Line 1
                                </span>
                                <br />
                                <input 
                                    type="text" 
                                    name="address1"
                                    className={style.datafield}  
                                    placeholder='Address 1' 
                                    value={formData.address1}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Address Line 2
                                </span>
                                <br />
                                <input 
                                    type="text" 
                                    name="address2"
                                    className={style.datafield}  
                                    placeholder='Address 2' 
                                    value={formData.address2}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Town/City
                                </span>
                                <br />
                                <input 
                                    type="text" 
                                    name="city"
                                    className={style.datafield}  
                                    placeholder='City' 
                                    value={formData.city}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Province
                                </span>
                                <br />
                                <input 
                                    type="text" 
                                    name="province"
                                    className={style.datafield}  
                                    placeholder='Province' 
                                    value={formData.province}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Country
                                </span>
                                <br />
                                <select 
                                    name="country"
                                    className={style.Combodatafield}  
                                    value={formData.country}
                                    onChange={handleChange}
                                    required 
                                >
                                    <option value="" disabled style={{ color: "#AEAEAE" }}>Country</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.inputGrid}>
                            <div className={style.inputFields}>
                                <span className={style.fieldName}>
                                    Date Moved In<span className={style.required}>*</span>
                                </span>
                                <br />
                                <input 
                                    id="birthDate" 
                                    type="text" 
                                    className={style.datafield}  
                                    placeholder='MM - DD - YYYY' 
                                    value={birthDate}
                                    onClick={handleDateClick}
                                    readOnly
                                    required 
                                />
                                {showCalendar && (
                                    <div className={style.calendarWrapper}>
                                        <Calendar 
                                            onApply={handleDateSelect}
                                            onCancel={handleCalendarCancel}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className={style.attachField}>
                                <div className={style.fieldHeader}>
                                    <span className={style.fieldName}>
                                        Proof of Address
                                    </span>
                                    <div className={style.tooltipContainer}>
                                        <img 
                                            src={infoIcon} 
                                            alt="info" 
                                            className={style.infoIcon}
                                        />
                                        <span className={style.tooltip}>
                                            Electricity Bill, Water Bill Anything
                                        </span>
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
                                        <span>{formData.proofOfAddressName || 'Upload logo in (.png) format'}</span> {/* Display the file name */}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={style.btnContainer}>
                            <button className={style.goBack} onClick={handleGoBack}>
                                <img src={arrow} alt="Back" /> Go Back
                            </button>
                            <button className={style.btnNext} onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default CurrentAddress;