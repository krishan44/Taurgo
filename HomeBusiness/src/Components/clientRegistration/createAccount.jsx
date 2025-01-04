import style from "./createAccount.module.css";  
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png";
import loginPhoto from "../../assets/loginPage/loginPhoto.jpeg";
import RICS from "../../assets/loginPage/RICS.png";

function CreateAccount() {  
    return(
        <div className={style.mainContainer}>
            <div className={style.inputContainer}>
                <img src={logoTaurgo} alt="Logo" className={style.logo} /> 
                <div className={style.loginFields}>
                    <div className={style.changeBtns}>
                    <a href=""><button className={style.btnClient}>Register as a Client</button></a>
                    <a href=""><button className={style.btnPartner}>Register as a Partner</button></a>
                    </div>
                    <h2>Create your Account</h2>
                    <span className={style.fieldName}>Organisation Reference</span>
                    <input type="text" placeholder='Organisation name' required />
                    <span className={style.fieldName}>Email</span>
                    <input type="text" placeholder='Enter your Email' required />
                    <span className={style.fieldName}>Password</span>
                    <input type="password" placeholder='••••••••' required/>
                    <span className={style.fieldName}>Repeat Password</span>
                    <input type="password" placeholder='••••••••' required/>
                
                    <a href=""><button className={style.signinBtn}>Register</button></a>
                    <span className={style.registerText}>I have an Account? <a href="">Login</a></span>

                </div>
            </div>
            <div className={style.bottomElements}>
                <span className={style.copyright}>© Taurgo</span>
                <img src={RICS} alt="Tech Partner Logo" className={style.techPartner}/>
            </div>
            <div className={style.imageContainer}>
                <img src={loginPhoto} alt="Houses" className={style.loginPhoto} />
                
            </div>
        </div>
    )
}

export default CreateAccount;