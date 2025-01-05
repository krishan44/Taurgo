import style from './addressDetail.module.css';
import searchIcon from "../../assets/icons/search.png"; 
import attachIcon from "../../assets/icons/attach.png"; 
import arrow from "../../assets/icons/arrow.png"; 
import infoIcon from "../../assets/icons/warning.png"; 

function AddressDetail() {
    return(
        <>
            <div className={style.addressDetails}>
                <div className={style.pageHeader}>
                    <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
                </div>

                <div className={style.Details}>
                    <span className={style.step}>Step 1/2</span>
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
                                        className={style.datafield}  
                                        placeholder='Search Postcode' 
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
                                    className={style.datafield}  
                                    placeholder='Address 1' 
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
                                    className={style.datafield}  
                                    placeholder='Address 2' 
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
                                    className={style.datafield}  
                                    placeholder='City' 
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
                                    className={style.datafield}  
                                    placeholder='Province' 
                                    required 
                                />
                            </div>
                            <div>
                                <span className={style.fieldName}>
                                    Country
                                </span>
                                <br />
                                <select 
                                    className={style.Combodatafield}  
                                    required 
                                >
                                    <option value="" disabled selected style={{ color: "#AEAEAE" }}>Country</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>
                            
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
                                        This will be used to brand all our projects with.
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
                        <div className={style.btnContainer}>
                            <a href="" className={style.goBack}><img src={arrow} alt="Back" />Go Back</a>
                            <a href="" className={style.btnNext}>Next</a>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default AddressDetail