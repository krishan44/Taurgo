import { useState } from 'react';
import style from "./expertise.module.css";
import dropDownIcon from "../../assets/icons/dropDown.png"; 

function Expertise() {
    // Separate state for each dropdown
    const [openDropdowns, setOpenDropdowns] = useState({
        individual: false,
        corporate: false,
        medium: false
    });

    // Single state for selected business type
    const [selectedBusiness, setSelectedBusiness] = useState('');

    const toggleDropdown = (type) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleCheckboxChange = (type) => {
        setSelectedBusiness(type);
    };

    return(
        <>  

        <div className={style.registerProcess}>
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
                                After submitting the registration form, a member of the Taurgo team will reach out to you to complete the onboarding process. They will guide you through the platform if required and ensure you are properly onboarded with the right support and resources.
                            </span>
                    </div>
                    <span className={style.businessSize}>
                        Select your size of business
                    </span>
                    <div className={style.checkBoxes}>
                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusiness === 'individual'}
                                onChange={() => handleCheckboxChange('individual')}
                            />
                            <label htmlFor="Individual" className={style.type}>Individual Agency</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.individual ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('individual')}
                            /> 
                            {openDropdowns.individual && (
                                <p className={style.boxContent}>
                                    This option is for solo estate agents or realtors operating independently. Individuals often manage a limited portfolio of properties and require tailored services to support their specific needs in property marketing, inspections, and valuations. 
                                </p>
                            )}
                        </div>

                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusiness === 'corporate'}
                                onChange={() => handleCheckboxChange('corporate')}
                            />
                            <label htmlFor="CorporateAccount" className={style.type}>Corporate Account</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.corporate ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('corporate')}
                            /> 
                            {openDropdowns.corporate && (
                                <p className={style.boxContent}>
                                    This option is designed for larger organizations...
                                </p>
                            )}
                        </div>

                        <div className={style.box}>
                            <input 
                                type="checkbox" 
                                name="BusinessType"
                                checked={selectedBusiness === 'medium'}
                                onChange={() => handleCheckboxChange('medium')}
                            />
                            <label htmlFor="MediumEnterprise" className={style.type}>Medium Enterprise</label>
                            <img 
                                src={dropDownIcon} 
                                alt="Dropdown" 
                                className={`${style.dropDownIcon} ${openDropdowns.medium ? style.rotate : ''}`}
                                onClick={() => toggleDropdown('medium')}
                            /> 
                            {openDropdowns.medium && (
                                <p className={style.boxContent}>
                                    Perfect for medium-sized businesses...
                                </p>
                            )}
                        </div>
                    </div>
                    <a href="" className={style.btnNext}>Next</a>
                </div>
            </div>    
        </div>
        </>
    )

}

export default Expertise;