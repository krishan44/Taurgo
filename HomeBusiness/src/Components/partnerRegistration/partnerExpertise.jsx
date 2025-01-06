import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./partnerExpertise.module.css";
import dropDownIcon from "../../assets/icons/dropDown.png"; 

function PartnerExpertise() {
    const navigate = useNavigate();
    const [openDropdowns, setOpenDropdowns] = useState({
        Photography: false,
        InventoryClerk: false,
        FieldAssessor: false,
        RICSSurveyor: false
    });

    // State for selected business types
    const [selectedBusinesses, setSelectedBusinesses] = useState([]);
    const [error, setError] = useState('');

    const toggleDropdown = (type) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleCheckboxChange = (type) => {
        setSelectedBusinesses(prev => 
            prev.includes(type) 
                ? prev.filter(item => item !== type) 
                : [...prev, type]
        );
        setError(''); // Clear error on change
    };

    const validateForm = () => {
        if (selectedBusinesses.length === 0) return 'At least one area of expertise must be selected';
        return '';
    };

    const handleNext = () => {
        const validationError = validateForm();
        if (!validationError) {
            navigate('/detail-partner'); // Navigate to the next step
        } else {
            setError(validationError);
        }
    };

    return(
        <>  
        <div className={style.registerProcess}>
            {error && <div className={style.error}>{error}</div>} {/* Display error message */}
            <div className={style.pageHeader}>
                <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
            </div>
            <div className={style.pageContent}>
                <div className={style.Content}>
                    <div className={style.greeting}>
                        <span>Thank you for choosing to partner with Taurgo.</span>
                    </div>
                    <div className={style.Instruction}>
                            <span className={style.first}>
                                To ensure a successful partnership, please follow the Taurgo registration process <br />
                            </span>
                            <span>
                                <br />
                                Complete the Registration Form: <br />
                                Please fill out the required details on the Taurgo registration process. This information is essential for our initial due diligence to ensure you are placed within the correct team and area of Taurgo. <br />
                            </span>
                            <span>
                                <br /> Onboarding with Taurgo: <br /> 
                                After submitting the registration form, a member of the Taurgo team will reach out to you to complete the onboarding process. They will guide you through the platform if required and ensure you are properly onboarded with the right support and resources.<br />
                            </span>
                            <span>
                                <br /> Verification and Placement: <br />                                 
                                Taurgo will review the information provided during registration and complete their initial due diligence. This will determine the appropriate team and area within Taurgo for your partnership with the You.com Smart Assistant.
                            </span>
                    </div>
                    <span className={style.businessSize}>
                        Select your area of expertise
                    </span>
                    <div className={style.checkBoxes}>
                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusinesses.includes('Photography')}
                                onChange={() => handleCheckboxChange('Photography')}
                            />
                            <label htmlFor="Photography" className={style.type}>Photography</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.Photography ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('Photography')}
                            /> 
                            {openDropdowns.Photography && (
                                <>
                                    <p className={style.boxContent}>
                                        Capture Media Packs of Properties As a Property Photographer for Taurgo, your primary 
                                        <br />
                                        <br />
                                        responsible Will be 
                                        <span className={style.list}>
                                            <ul>
                                                <li>Capture 360-Degree Imagery Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.</li>
                                                <li>Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.</li>
                                                <li>Smartphone-Based Photography Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features</li>
                                                <li>Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.</li>
                                                <li>Obtain Raw Floor Plans Using your smartphone, capture the raw floor plans of the properties.</li>
                                                <li>Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.</li>
                                            </ul>    
                                        </span> 
                                        <span className={style.role}>Your role is crucial in providing Taurgo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.</span>
                                    </p>
                                </>
                            )}
                        </div>

                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusinesses.includes('InventoryClerk')}
                                onChange={() => handleCheckboxChange('InventoryClerk')}
                            />
                            <label htmlFor="InventoryClerk" className={style.type}>Inventory Clerk</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.InventoryClerk ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('InventoryClerk')}
                            /> 
                            {openDropdowns.InventoryClerk && (
                                <>
                                <p className={style.boxContent}>
                                    Capture Media Packs of Properties As a Property Photographer for Taurgo, your primary 
                                    <br />
                                    <br />
                                    responsible Will be 
                                    <span className={style.list}>
                                        <ul>
                                            <li>Capture 360-Degree Imagery Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.</li>
                                            <li>Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.</li>
                                            <li>Smartphone-Based Photography Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features</li>
                                            <li>Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.</li>
                                            <li>Obtain Raw Floor Plans Using your smartphone, capture the raw floor plans of the properties.</li>
                                            <li>Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.</li>
                                        </ul>    
                                    </span> 
                                    <span className={style.role}>Your role is crucial in providing Taurgo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.</span>
                                </p>
                            </>
                            )}
                        </div>

                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusinesses.includes('FieldAssessor')}
                                onChange={() => handleCheckboxChange('FieldAssessor')}
                            />
                            <label htmlFor="FieldAssessor" className={style.type}>Field Assessor</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.FieldAssessor ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('FieldAssessor')}
                            /> 
                            {openDropdowns.FieldAssessor && (
                                <>
                                <p className={style.boxContent}>
                                    Capture Media Packs of Properties As a Property Photographer for Taurgo, your primary 
                                    <br />
                                    <br />
                                    responsible Will be 
                                    <span className={style.list}>
                                        <ul>
                                            <li>Capture 360-Degree Imagery Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.</li>
                                            <li>Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.</li>
                                            <li>Smartphone-Based Photography Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features</li>
                                            <li>Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.</li>
                                            <li>Obtain Raw Floor Plans Using your smartphone, capture the raw floor plans of the properties.</li>
                                            <li>Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.</li>
                                        </ul>    
                                    </span> 
                                    <span className={style.role}>Your role is crucial in providing Taurgo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.</span>
                                </p>
                            </>
                            )}
                        </div>

                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusinesses.includes('RICSSurveyor')}
                                onChange={() => handleCheckboxChange('RICSSurveyor')}
                            />
                            <label htmlFor="RICSSurveyor" className={style.type}>RICS Surveyor/ Valuer</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.RICSSurveyor ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('RICSSurveyor')}
                            /> 
                            {openDropdowns.RICSSurveyor && (
                                <>
                                <p className={style.boxContent}>
                                    Capture Media Packs of Properties As a Property Photographer for Taurgo, your primary 
                                    <br />
                                    <br />
                                    responsible Will be 
                                    <span className={style.list}>
                                        <ul>
                                            <li>Capture 360-Degree Imagery Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.</li>
                                            <li>Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.</li>
                                            <li>Smartphone-Based Photography Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features</li>
                                            <li>Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.</li>
                                            <li>Obtain Raw Floor Plans Using your smartphone, capture the raw floor plans of the properties.</li>
                                            <li>Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.</li>
                                        </ul>    
                                    </span> 
                                    <span className={style.role}>Your role is crucial in providing Taurgo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.</span>
                                </p>
                            </>
                            )}
                        </div>
                    </div>
                    <button className={style.btnNext} onClick={handleNext}>Next</button>
                </div>
            </div>    
        </div>
        </>
    )

}

export default PartnerExpertise;