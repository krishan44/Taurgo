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

        </div>
        </>
    )
}

export default PersonalDetail;
