import style from './personalDetail.module.css';

function PersonalDetail() {
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
                    <span className={style.title}>Organisation Details</span>
                    <div className={style.inputGrid}>
                        <div className={style.inputFields}>
                            <span className={style.fieldName}>
                                Company Name<span className={style.required}>*</span>
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
                                Full Name<span className={style.required}>*</span>
                            </span>
                            <br />
                            <input 
                                type="tel" 
                                className={style.datafield}  
                                placeholder='Full Name' 
                                required 
                            />
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
                                placeholder='Add your phone number' 
                                required 
                            />
                        </div>
                    </div>
                    <a href="" className={style.btnNext}>Next</a>
                </div>
            </div>
        </>
    )
}

export default PersonalDetail;
