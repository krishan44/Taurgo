import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./moreDetails.module.css";
import arrow from "../../assets/icons/arrow.png";

function MoreDetails() {
    const navigate = useNavigate();

    // State declarations
    const [formData, setFormData] = useState({
        rentalProperties: '',
        salesProperties: '',
        serviceRequirements: [],
        frequency: '',
        deliveryMethod: '',
        additionalInfo: '',
        paymentMethod: {
            invoice: false,
            card: false,
        },
    });

    const [error, setError] = useState('');
    const [isOtherChecked, setIsOtherChecked] = useState(false);

    // Handlers
    const handleGoBack = () => {
        navigate('/address-detail');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Clear error on change
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            serviceRequirements: checked
                ? [...prev.serviceRequirements, id]
                : prev.serviceRequirements.filter((item) => item !== id)
        }));
        if (id === 'service5') {
            setIsOtherChecked(checked);
        }
        setError(''); // Clear error on change
    };

    const handleFrequencyChange = (e) => {
        setFormData({
            ...formData,
            frequency: e.target.value
        });
        setError(''); // Clear error on change
    };

    const handleDeliveryChange = (e) => {
        setFormData({
            ...formData,
            deliveryMethod: e.target.value
        });
        setError(''); // Clear error on change
    };

    const handlePaymentChange = (e) => {
        const { id, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            paymentMethod: {
                ...prev.paymentMethod,
                [id]: checked,
            }
        }));
        setError(''); // Clear error on change
    };

    const validateForm = () => {
        if (!formData.rentalProperties) return 'Aproximate Number of Rental Properties Managed is required';
        if (!formData.salesProperties) return 'Approximate Number of Sales Properties Marketed per Month is required';
        if (formData.serviceRequirements.length === 0) return 'At least one service requirement must be selected';
        if (!formData.frequency) return 'Frequency of Required Reports/Inspections is required';
        if (!formData.deliveryMethod) return 'Preferred Method of Delivery for Reports is required';
        if (!formData.paymentMethod.invoice && !formData.paymentMethod.card) return 'At least one payment method must be selected';
        return '';
    };

    const handleNext = () => {
        const validationError = validateForm();
        if (!validationError) {
            navigate('/complete'); 
        } else {
            setError(validationError);
        }
    };

    return (
        <>
            <div className={style.moreDetails}>
                {error && <div className={style.error}>{error}</div>} {/* Display error message */}
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
                </div>
                <div className={style.form}>
                    <span className={style.title}>Company Information</span>
                    <div className={style.firstTwofields}>
                        <div>
                            <span className={style.fieldName}>
                                Aproximate Number of Rental Properties Managed
                            </span>
                            <input 
                                type="tel" 
                                name="rentalProperties"
                                className={style.datafield}  
                                placeholder='Add your value' 
                                value={formData.rentalProperties}
                                onChange={handleChange}
                                required 
                            />
                        </div>  
                        <div>  
                            <span className={style.fieldName}>
                                Approximate Number of Sales Properties Marketed per Month
                            </span>
                            <input 
                                type="tel" 
                                name="salesProperties"
                                className={style.datafield}  
                                placeholder='Add your value' 
                                value={formData.salesProperties}
                                onChange={handleChange}
                                required 
                            />
                        </div>  
                    </div>
                    <div className={style.service}>
                        <span className={style.serviceTitle}>Service Requirements <span className={style.paranthesis}> (<span className={style.required}>*</span>check as appropriate)</span></span>
                        <div className={style.checkboxContainer}>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="service1" 
                                    className={style.checkbox} 
                                    onChange={handleCheckboxChange}
                                    checked={formData.serviceRequirements.includes('service1')}
                                />
                                <label htmlFor="service1">Media Packs <span className={style.paranthesis}>(2D Photos, 360° Virtual Tours, Floorplans)</span></label>
                            </div>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="service2" 
                                    className={style.checkbox} 
                                    onChange={handleCheckboxChange}
                                    checked={formData.serviceRequirements.includes('service2')}
                                />
                                <label htmlFor="service2">360° Mid-Term Inspection Reports Property</label>
                            </div>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="service3" 
                                    className={style.checkbox} 
                                    onChange={handleCheckboxChange}
                                    checked={formData.serviceRequirements.includes('service3')}
                                />
                                <label htmlFor="service3">360° Inventory Reports Help to Buy Valuation Reports Level 1</label>
                            </div>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="service4" 
                                    className={style.checkbox} 
                                    onChange={handleCheckboxChange}
                                    checked={formData.serviceRequirements.includes('service4')}
                                />
                                <label htmlFor="service4">360° Inventory Reports Help to Buy Valuation Reports Level 2</label>
                            </div>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="service5" 
                                    className={style.checkbox}
                                    onChange={handleCheckboxChange}
                                    checked={formData.serviceRequirements.includes('service5')}
                                />
                                <label htmlFor="service5">Valuation Reports Other <span className={style.paranthesis}>(please specify)</span> </label> 
                            </div>
                            <textarea 
                                id="specification" 
                                className={style.specification} 
                                placeholder="Please Specify"
                                rows="4"
                                disabled={!isOtherChecked}
                            ></textarea>
                        </div>
                    </div>
                    <div className={style.Inspections}>
                        <span className={style.serviceTitle}>Frequency of Required Reports/Inspections </span>
                        <div className={style.radioContainer}>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="monthly"
                                    name="frequency"
                                    value="monthly"
                                    checked={formData.frequency === 'monthly'}
                                    onChange={handleFrequencyChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="monthly">Monthly</label>
                            </div>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="quarterly"
                                    name="frequency"
                                    value="quarterly"
                                    checked={formData.frequency === 'quarterly'}
                                    onChange={handleFrequencyChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="quarterly">Quarterly</label>
                            </div>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="biAnnual"
                                    name="frequency"
                                    value="biAnnual"
                                    checked={formData.frequency === 'biAnnual'}
                                    onChange={handleFrequencyChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="biAnnual">Bi-Annual</label>
                            </div>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="annual"
                                    name="frequency"
                                    value="annual"
                                    checked={formData.frequency === 'annual'}
                                    onChange={handleFrequencyChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="annual">Annual</label>
                            </div>
                        </div>
                    </div>
                    <div className={style.reportDelivery}>
                        <span className={style.serviceTitle}>Preferred Method of Delivery for Reports</span>
                        <div className={style.radioContainer}>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="Email"
                                    name="deliveryMethod"
                                    value="Email"
                                    checked={formData.deliveryMethod === 'Email'}
                                    onChange={handleDeliveryChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="Portal"
                                    name="deliveryMethod"
                                    value="Portal"
                                    checked={formData.deliveryMethod === 'Portal'}
                                    onChange={handleDeliveryChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="Portal">Portal Download</label>
                            </div>
                            <div className={style.radioItem}>
                                <input 
                                    type="radio"
                                    id="Physical Mail"
                                    name="deliveryMethod"
                                    value="Physical Mail"
                                    checked={formData.deliveryMethod === 'Physical Mail'}
                                    onChange={handleDeliveryChange}
                                    className={style.radioButton}
                                />
                                <label htmlFor="Physical Mail">Physical Mail</label>
                            </div>
                        </div>
                    </div>
                    <div className={style.additionalInfo}>
                        <span className={style.serviceTitle}>Additional Information</span>
                        <div>
                            <textarea 
                                id="Information" 
                                name="additionalInfo"
                                className={style.Info} 
                                placeholder="Add about your agency or specific needs that would help us serve you better (Optional) "
                                rows="4"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className={style.payMethod}>
                        <span className={style.serviceTitle}>Payment Method</span>
                        <div className={style.checkboxContainer}>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="invoice" 
                                    className={style.checkbox}
                                    checked={formData.paymentMethod.invoice}
                                    onChange={handlePaymentChange}
                                />
                                <label htmlFor="invoice">Pay as you go <span className={style.paranthesis}>(payment required before request of service)</span></label>
                            </div>
                            <div className={style.checkboxItem}>
                                <input 
                                    type="checkbox" 
                                    id="card" 
                                    className={style.checkbox}
                                    checked={formData.paymentMethod.card}
                                    onChange={handlePaymentChange}
                                />
                                <label htmlFor="card">7 Day Invoice <span className={style.paranthesis}>(25% deposit required)</span></label>
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
        </>
    );
}

export default MoreDetails;