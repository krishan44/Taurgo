import { useState } from 'react';
import style from './attachments.module.css';
import searchIcon from "../../assets/icons/search.png"; 
import attachIcon from "../../assets/icons/attach.png"; 
import arrow from "../../assets/icons/arrow.png"; 
import infoIcon from "../../assets/icons/warning.png"; 


function Attachment(){
    const [useTaurgoSupplied, setUseTaurgoSupplied] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState({
        file1: null,
        file2: null,
        file3: null
    });

    const handleCheckboxChange = (e) => {
        setUseTaurgoSupplied(e.target.checked);
    };

    const handleFileUpload = (fileKey) => (e) => {
        setUploadedFiles({
            ...uploadedFiles,
            [fileKey]: e.target.files[0]
        });
    };

    return (
        <>
         <div className={style.attachments}>
             <div className={style.pageHeader}>
                <div> <span className={style.selected}><span className={style.number}>1 </span><span>Select your experties <span className={style.dash}>|</span></span></span> </div>
                <div> <span className={style.number}>2 </span><span>Client Details <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>3 </span><span>Company Address <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>4 </span><span>Fit To Work <span className={style.dash}>|</span></span> </div>
                <div> <span className={style.number}>5 </span><span>Onbording Form Complete</span> </div>
            </div>
            <div className={style.professionalDetails}>
                <span className={style.title}>Professional Details</span>
                <div className={style.uploadField}>
                    <span className={style.instruction}>Please upload related professional supporting documentation. CV, Certifications, Accreditations.</span>
                    <div className={style.fileUploadContainer}>
                        <input 
                            type="file" 
                            className={style.attachFile}
                            id="fileInput1"
                            required
                            onChange={handleFileUpload('file1')}
                        />
                        <label htmlFor="fileInput1" className={style.customFileUpload}>
                            <div className={style.uploadText}>
                                <div className={style.clicktoUpload}>
                                    <img src={attachIcon} alt="attach" className={style.attachIcon} />
                                    <span className={style.click}> Click to Upload</span>
                                </div>
                                <span className={style.orDrag}>or drag and drop files here</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className={style.uploadField}>
                    <span className={style.instruction}>Please upload related professional supporting documentation. CV, Certifications, Accreditations.</span>
                    <div className={style.fileUploadContainer}>
                        <input 
                            type="file" 
                            className={style.attachFile}
                            id="fileInput2"
                            required
                            onChange={handleFileUpload('file2')}
                        />
                        <label htmlFor="fileInput2" className={style.customFileUpload}>
                            <div className={style.uploadText}>
                                <div className={style.clicktoUpload}>
                                    <img src={attachIcon} alt="attach" className={style.attachIcon} />
                                    <span className={style.click}> Click to Upload</span>
                                </div>
                                <span className={style.orDrag}>or drag and drop files here</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className={style.uploadField}>
                    <span className={style.instruction}>Please upload related professional supporting documentation. CV, Certifications, Accreditations.</span>
                    <div className={style.fileUploadContainer}>
                        <input 
                            type="file" 
                            className={style.attachFile}
                            id="fileInput3"
                            required
                            onChange={handleFileUpload('file3')}
                        />
                        <label htmlFor="fileInput3" className={style.customFileUpload}>
                            <div className={style.uploadText}>
                                <div className={style.clicktoUpload}>
                                    <img src={attachIcon} alt="attach" className={style.attachIcon} />
                                    <span className={style.click}> Click to Upload</span>
                                </div>
                                <span className={style.orDrag}>or drag and drop files here</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className={style.checkboxContainer}>
                    <input 
                        type="checkbox"
                        id="taurgoSupplied"
                        checked={useTaurgoSupplied}
                        onChange={handleCheckboxChange}
                        className={style.checkbox}
                    />
                    <label htmlFor="taurgoSupplied" className={style.checkboxLabel}>
                        Check box if wish to use Taurgo supplied
                    </label>
                </div>
                <div className={style.btnContainer}>
                    <a href="" className={style.goBack}><img src={arrow} alt="Back" />Go Back</a>
                    <a href="" className={style.btnNext}>Next</a>
                </div>
            </div>
             
         </div>
        </>
    )
}

export default Attachment