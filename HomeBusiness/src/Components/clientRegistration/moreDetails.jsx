import style from "./moreDetails.module.css"

function moreDetails(){
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
                <div className={firstTwofields}>
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
            </div>
          </div>
        </>
    )
}

export default moreDetails