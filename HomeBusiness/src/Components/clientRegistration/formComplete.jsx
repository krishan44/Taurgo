import style from "./formComplete.module.css"

function FormComplete(){
    return (
        <>
        <div className={style.FormComplete}>
            <div className={style.pageHeader}>
                <div> 
                    <span ><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                    <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                    <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
            </div>
            <div className={style.content}>
                <div>
                    <span className={style.title}>Onboarding Form Complete</span>
                    <p className={style.paragraphOne}>Our compliance team will review the provided information to ensure we have the necessary documentation. 
                    </p>
                    <p className={style.paragraphTwo}>If you have any question, feel free to get in touch by emailing <a href="" className={style.contact}>booking@taurgo.co.uk</a>
                    </p>
                </div>
                <div className={style.confirm}>
                    <span className={style.title}>Confirm Your Registration</span>
                    <p className={style.paragraphOne}>After pressing "Finish" your registration form, you will receive a confirmation email. Please check your inbox (and spam folder) for this confirmation. 
                    </p>
                </div>
            </div>
            <a href="" className={style.btnNext}>Finish</a>
        </div>
        </>
    )
}

export default FormComplete