import style from "./partnerAccount.module.css"
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png";
import loginPhoto from "../../assets/loginPage/loginPhoto.jpeg";
import RICS from "../../assets/loginPage/RICS.png";
import { Link, useNavigate } from 'react-router-dom';

function PartnerAccount(){
    const navigate = useNavigate();

    return(
        <>
            <div className={style.mainContainer}>
                <div className={style.inputContainer}>
                    <img src={logoTaurgo} alt="Logo" className={style.logo} /> 
                    <div className={style.loginFields}>
                        <div className={style.changeBtns}>
                            <Link to="/client-register">
                                <button className={style.btnClient}>Register as a Client</button>
                            </Link>
                            <Link to="/register">
                                <button className={style.btnPartner}>Register as a Partner</button>
                            </Link>
                        </div>
                        <h2>Create your Account</h2>
                        <span className={style.fieldName}>Full Name</span>
                        <input type="text" placeholder='Your Name' required />
                        <span className={style.fieldName}>Email</span>
                        <input type="text" placeholder='Enter your Email' required />
                        <span className={style.fieldName}>Password</span>
                        <input type="password" placeholder='••••••••' required/>
                        <span className={style.fieldName}>Repeat Password</span>
                        <input type="password" placeholder='••••••••' required/>
                    
                        <a href=""><button className={style.signinBtn}>Register</button></a>
                        <span className={style.registerText}>I have an Account? 
                            <Link to="/login">Login</Link>
                        </span>
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
        </>
    )
}

export default PartnerAccount;
