import style from "./complete.module.css"

function Complete(){
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
                    <p className={style.paragraphOne}>Dylan, thank you for completing your onboarding form. We will now review the information and let you know if there's anything else we need. 
                    </p>
                </div>
                <div className={style.confirm}>
                    <span className={style.title}>What happens next?</span>
                    <p className={style.paragraphOne}>Thank you for registering to partner with Taurgo! We are thrilled to have you on board and look forward to a successful collaboration. After submitting your registration, here’s what you can expect confirmation Email
                    You will receive a confirmation email shortly, acknowledging your registration. This email will outline the next steps in the partnership process.
                    </p>
                    <p className={style.paragraphOne}>Review Process
                    </p>
                    <p className={style.paragraphOne}>Our team will review your application to ensure a great fit. This process typically takes 3-5 business days.
                        If we require any additional information, we will reach out to you via email.
                    </p>
                    <p className={style.paragraphOne}>Partnership Agreement
                    </p>
                    <p className={style.paragraphOne}>
                    Once your application is approved, we will send you a partnership agreement for your review and signature.
                    This document will detail the terms and conditions of our partnership.
                    </p>
                    <p className={style.paragraphOne}>Onboarding</p>
                    <p className={style.paragraphOne}>After the agreement is signed, you’ll receive onboarding materials and resources to help you get started.
                    We will also schedule an orientation session to walk you through our processes and answer any questions you may have. Should you have any questions in the meantime, please feel free to contact us. We are excited to start this journey together and are here to support you every step of the way!</p>
                </div>
                
            </div>
            <a href="" className={style.btnNext}>Finish</a>
        </div>
        </>
    )
}

export default Complete