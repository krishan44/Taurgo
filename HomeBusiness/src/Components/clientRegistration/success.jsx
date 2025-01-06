import style from "./success.module.css"
import logoTaurgo from "../../assets/loginPage/logoTaurgo.png"
import right from "../../assets/icons/right.png"

function Success(){
    return(
        <>
            <div className={style.Success}>
                <img src={logoTaurgo} alt="" />
                <div className={style.messageContainer}>
                    <span className={style.thankYou}>Thank you! <br />
                    You have completed the registration process</span>
                </div>
                <img src={right} alt="" className={style.right}/>
                <a href="/">Ok</a> 
            </div>
        </>
    )
}

export default Success;