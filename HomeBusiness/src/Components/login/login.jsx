import style from './login.module.css';
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png";
import loginPhoto from "../../assets/loginPage/loginPhoto.jpeg";
import RICS from "../../assets/loginPage/RICS.png";
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className={style.mainContainer}>
            <div className={style.inputContainer}>
                <img src={logoTaurgo} alt="Logo" className={style.logo} /> 
                <div className={style.loginFields}>
                    <h2>Login</h2>
                    <span className={style.welcomeText}>Welcome Back!</span>
                    <span className={style.fieldName}>Email</span>
                    <input type="text" placeholder='Enter your Email' required />
                    <span className={style.fieldName}>Password</span>
                    <input type="password" placeholder='********' required/>
                    <div className={style.Options} >
                        <div className="remember"> 
                            <input type="checkbox" id="rememberMe" name="rememberMe"/>
                            <label htmlFor="rememberMe" className={style.remeberText}>Remember for 30 Days</label>
                        </div>
                        <a href="https://github.com/krishan44?tab=overview&from=2025-01-01&to=2025-01-04" className={style.forgotPassword}>Forgot Password</a>
                    </div>
                    <a href=""><button className={style.signinBtn}>Sign In</button></a>
                    <span className={style.registerText}>
                        Don't have an Account? 
                        <Link to="/register" className={style.registerLink}>Register</Link>
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
    )
}

export default Login;