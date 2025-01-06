import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './detailPartner.module.css';
import Drop from "../../assets/icons/comboDrop.png"; 
import Calendar from './calender';
import infoIcon from "../../assets/icons/warning.png"; 
import attachIcon from "../../assets/icons/attach.png"; 

function DetailPartner() {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        title: false,
        gender: false
    });
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        logo: null,
        logoName: ''
    });
    const [error, setError] = useState('');

    const titles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."];
    const genders = ["Male", "Female", "Other"];

    const handleDropdownClick = (field) => {
        setIsDropdownOpen(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleTitleSelect = (title) => {
        setSelectedTitle(title);
        setIsDropdownOpen(prev => ({...prev, title: false}));
    };

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setIsDropdownOpen(prev => ({...prev, gender: false}));
    };

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
            logo: file,
            logoName: file.name // Store the file name
        });
        setError(''); // Clear error on change
    };

    const validateForm = () => {
        if (!formData.firstName) return 'First Name is required';
        if (!formData.lastName) return 'Last Name is required';
        if (!selectedTitle) return 'Title is required';
        if (!birthDate) return 'Date of Birth is required';
        if (!selectedGender) return 'Gender is required';
        if (!formData.email) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Enter a valid email address';
        if (!formData.phone) return 'Phone is required';
        if (!formData.logo) return 'Upload Company Logo is required';
        return '';
    };

    const handleNext = () => {
        const validationError = validateForm();
        if (!validationError) {
            navigate('/current-address'); // Navigate to the next step
        } else {
            setError(validationError);
        }
    };

    return (
        <>
            <div className={style.personalDetials}>
                {error && <div className={style.error}>{error}</div>} {/* Display error message */}
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span></div>
                    <div> <span className={style.number}>5 </span><span>Onboarding Form Complete</span></div>
                </div>
                <div className={style.Details}>
                    <span className={style.title}>Personal Details</span>
                    <div className={style.inputGrid}>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                First Name<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input 
                                type="text" 
                                name="firstName"
                                className={style.datafield}  
                                placeholder='First Name' 
                                value={formData.firstName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Last Name<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input 
                                type="text" 
                                name="lastName"
                                className={style.datafield}  
                                placeholder='Last Name' 
                                value={formData.lastName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Title<span className={style.required}>*</span>
                            </span>
                            <br />
                            <div className={style.titleField}>
                                <input 
                                    type="text" 
                                    className={style.Combodatafield}  
                                    placeholder='Title' 
                                    value={selectedTitle}
                                    disabled
                                    required 
                                />
                                <div className={style.titleBox} onClick={() => handleDropdownClick('title')}>
                                    <img src={Drop} alt="" className={`${style.dropIcon} ${isDropdownOpen.title ? style.rotate : ''}`}/>
                                </div>
                                {isDropdownOpen.title && (
                                    <div className={style.dropdownContent}>
                                        {titles.map((title) => (
                                            <div 
                                                key={title}
                                                className={style.dropdownItem}
                                                onClick={() => handleTitleSelect(title)}
                                            >
                                                {title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Date of Birth<span className={style.required}>*</span>
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
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Gender<span className={style.required}>*</span>
                            </span>
                            <br />
                            <div className={style.titleField}>
                                <input 
                                    type="text" 
                                    className={style.Combodatafield}  
                                    placeholder='Gender' 
                                    value={selectedGender}
                                    disabled
                                    required 
                                />
                                <div className={style.titleBox} onClick={() => handleDropdownClick('gender')}>
                                    <img src={Drop} alt="" className={`${style.dropIcon} ${isDropdownOpen.gender ? style.rotate : ''}`}/>
                                </div>
                                {isDropdownOpen.gender && (
                                    <div className={style.dropdownContent}>
                                        {genders.map((gender) => (
                                            <div 
                                                key={gender}
                                                className={style.dropdownItem}
                                                onClick={() => handleGenderSelect(gender)}
                                            >
                                                {gender}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div>
                            {/* for space */}
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
                                placeholder='hello@email.com' 
                                value={formData.email}
                                onChange={handleChange}
                                required 
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
                                placeholder='Add your Phone Number' 
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className={style.attachField}>
                            <div className={style.fieldHeader}>
                                <span className={style.fieldName}>
                                    Upload Company Logo here
                                </span>
                                <div className={style.tooltipContainer}>
                                    <img 
                                        src={infoIcon} 
                                        alt="info" 
                                        className={style.infoIcon}
                                    />
                                    <span className={style.tooltip}>
                                    Please provide a clear picture of an official ID, such as a Drivers Licence or Passport'.
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
                                    <span>{formData.logoName || 'Upload logo in (.png) format'}</span> {/* Display the file name */}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className={style.btnNext} onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default DetailPartner;
