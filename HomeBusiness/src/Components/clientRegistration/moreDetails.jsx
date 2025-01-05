import { useState } from 'react'
import style from "./moreDetails.module.css"
import arrow from "../../assets/icons/arrow.png"; 

function MoreDetails(){
    const [isOtherChecked, setIsOtherChecked] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState('');
    const [selectedDelivery, setSelectedDelivery] = useState('');
    const [paymentMethod, setPaymentMethod] = useState({
        invoice: false,
        card: false
    });

    const handleCheckboxChange = (e) => {
        setIsOtherChecked(e.target.checked);
    };

    const handleFrequencyChange = (e) => {
        setSelectedFrequency(e.target.value);
    };

    const handleDeliveryChange = (e) => {
        setSelectedDelivery(e.target.value);
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod({
            ...paymentMethod,
            [e.target.value]: e.target.checked
        });
    };

    return(
        <>
          <div className={style.moreDetails}>
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
                            className={style.datafield}  
                            placeholder='Add your value' 
                            required 
                        />
                    </div>  
                    <div>  
                        <span className={style.fieldName}>
                        Approximate Number of Sales Properties Marketed per Month
                        </span>
                        <input 
                            type="tel" 
                            className={style.datafield}  
                            placeholder='Add your value' 
                            required 
                        />
                    </div>  
                </div>
                <div className={style.service}>
                    <span className={style.serviceTitle}>Service Requirements <span className={style.paranthesis}> (<span className={style.required}>*</span>check as appropriate)</span></span>
                    <div className={style.checkboxContainer}>
                        <div className={style.checkboxItem}>
                            <input type="checkbox" id="service1" className={style.checkbox} />
                            <label htmlFor="service1">Media Packs <span className={style.paranthesis}>(2D Photos, 360° Virtual Tours, Floorplans)</span></label>
                        </div>
                        <div className={style.checkboxItem}>
                            <input type="checkbox" id="service2" className={style.checkbox} />
                            <label htmlFor="service2">360° Mid-Term Inspection Reports Property</label>
                        </div>
                        <div className={style.checkboxItem}>
                            <input type="checkbox" id="service3" className={style.checkbox} />
                            <label htmlFor="service3">360° Inventory Reports Help to Buy Valuation Reports Level 1</label>
                        </div>
                        <div className={style.checkboxItem}>
                            <input type="checkbox" id="service4" className={style.checkbox} />
                            <label htmlFor="service4">360° Inventory Reports Help to Buy Valuation Reports Level 2</label>
                        </div>
                        <div className={style.checkboxItem}>
                            <input 
                                type="checkbox" 
                                id="service5" 
                                className={style.checkbox}
                                onChange={handleCheckboxChange}
                                checked={isOtherChecked}
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
                                checked={selectedFrequency === 'monthly'}
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
                                checked={selectedFrequency === 'quarterly'}
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
                                checked={selectedFrequency === 'biAnnual'}
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
                                checked={selectedFrequency === 'annual'}
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
                                name="delivery"
                                value="Email"
                                checked={selectedDelivery === 'direct'}
                                onChange={handleDeliveryChange}
                                className={style.radioButton}
                            />
                            <label htmlFor="direct">Email</label>
                        </div>
                        <div className={style.radioItem}>
                            <input 
                                type="radio"
                                id="Portal"
                                name="delivery"
                                value="Portal"
                                checked={selectedDelivery === 'agent'}
                                onChange={handleDeliveryChange}
                                className={style.radioButton}
                            />
                            <label htmlFor="agent">Portal Download</label>
                        </div>
                        <div className={style.radioItem}>
                            <input 
                                type="radio"
                                id="Physical Mail"
                                name="delivery"
                                value="Physical Mail"
                                checked={selectedDelivery === 'both'}
                                onChange={handleDeliveryChange}
                                className={style.radioButton}
                            />
                            <label htmlFor="both">Physical Mail</label>
                        </div>
                    </div>
                </div>
                <div className={style.additionalInfo}>
                    <span className={style.serviceTitle}>Additional Information</span>
                    <div>
                        <textarea 
                            id="Information" 
                            className={style.Info} 
                            placeholder="Add about your agency or specific needs that would help us serve you better (Optional) "
                            rows="4"
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
                                value="invoice"
                                className={style.checkbox}
                                checked={paymentMethod.invoice}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="invoice">Pay as you go <span className={style.paranthesis}>(payment required before request of service)</span></label>
                        </div>
                        <div className={style.checkboxItem}>
                            <input 
                                type="checkbox" 
                                id="card" 
                                value="card"
                                className={style.checkbox}
                                checked={paymentMethod.card}
                                onChange={handlePaymentChange}
                            />
                            <label htmlFor="card">7 Day Invoice <span className={style.paranthesis}>(25% deposit required)</span></label>
                        </div>
                    </div>
                </div>
                <div className={style.btnContainer}>
                    <a href="" className={style.goBack}><img src={arrow} alt="Back" />Go Back</a>
                    <a href="" className={style.btnNext}>Next</a>
                </div>
            </div>
          </div>
        </>
    )
}

export default MoreDetails