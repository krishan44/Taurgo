import { useState } from 'react';
import style from './detailPartner.module.css';
import Drop from "../../assets/icons/comboDrop.png"; 
import Calendar from './calender';
import infoIcon from "../../assets/icons/warning.png"; 
import attachIcon from "../../assets/icons/attach.png"; 

function DetailPartner() {
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        title: false,
        gender: false
    });
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    
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

    return (
        <>
          <div className={style.personalDetials}>
                      <div className={style.pageHeader}>
                          <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                          <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                          <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                          <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                          <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
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
                                className={style.datafield}  
                                placeholder='First Name' 
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
                                className={style.datafield}  
                                placeholder='Last Name' 
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

                        </div>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Email<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input 
                                type="text" 
                                className={style.datafield}  
                                placeholder='hello@email.com' 
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
                                className={style.datafield}  
                                placeholder='Add your Phone Number' 
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
                                    required 
                                />
                                <label htmlFor="fileInput" className={style.customFileUpload}>
                                    <img src={attachIcon} alt="attach" className={style.attachIcon} />
                                    <span>Upload logo in (.png) format</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <a href="" className={style.btnNext}>Next</a>
                </div>
            </div>
        </>
    )
}

export default DetailPartner;
