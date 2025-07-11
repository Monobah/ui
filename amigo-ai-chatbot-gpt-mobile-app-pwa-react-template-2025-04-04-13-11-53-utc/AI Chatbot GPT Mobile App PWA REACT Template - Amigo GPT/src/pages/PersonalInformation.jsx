import React, { useEffect, useState } from "react";
import girlImg from "../assets/images/girl.png"
import buttonBack from "../assets/images/Button-Back.png"
import CongratulationsImg from "../assets/images/congratulations.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PersonalInformation = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [profilePic, setProfilePic] = useState(girlImg);
    const [showLoader, setShowLoader] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Profile Photo Upload
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    // Page Redirct 
    const handleRedirect = () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
            window.location.href = "CreateNewPin";
        }, 2000);
    };


    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Personal Information Screen===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Personal Information</h1>
                        </div>
                        <div className="verify-section-main verify-section-main-forget">
                            <div className="camera_main position-relative">
                                <div className="circle-img-girl">
                                    <img className="profile-pic" src={profilePic} alt="girl" />
                                </div>
                                <svg className="ri-camera-line upload-button" xmlns="http://www.w3.org/2000/svg" width="40"
                                    height="40" viewBox="0 0 40 40" fill="none" onClick={() => document.querySelector(".file-upload").click()}>
                                    <circle className="camera-bg" cx="20" cy="20" r="20" fill="#0F0F0F" />
                                    <g>
                                        <path className="camera"
                                            d="M13 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12H23C23.2652 12 23.5196 12.1054 23.7071 12.2929C23.8946 12.4804 24 12.7348 24 13C24 13.5304 24.2107 14.0391 24.5858 14.4142C24.9609 14.7893 25.4696 15 26 15H27C27.5304 15 28.0391 15.2107 28.4142 15.5858C28.7893 15.9609 29 16.4696 29 17V26C29 26.5304 28.7893 27.0391 28.4142 27.4142C28.0391 27.7893 27.5304 28 27 28H13C12.4696 28 11.9609 27.7893 11.5858 27.4142C11.2107 27.0391 11 26.5304 11 26V17C11 16.4696 11.2107 15.9609 11.5858 15.5858C11.9609 15.2107 12.4696 15 13 15"
                                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="camera"
                                            d="M20 24C21.6569 24 23 22.6569 23 21C23 19.3431 21.6569 18 20 18C18.3431 18 17 19.3431 17 21C17 22.6569 18.3431 24 20 24Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                                <input className="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <div className="new_password_input">
                                <div className="form-item">
                                    <input type="text" id="First_Name" autoComplete="off" required />
                                    <label className="info-person" htmlFor="First_Name">First Name</label>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="Last_Name" autoComplete="off" required />
                                    <label className="info-person" htmlFor="Last_Name">Last Name</label>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="Email_Address" autoComplete="off" required />
                                    <label className="info-person" htmlFor="Email_Address">Email Address</label>
                                </div>
                                <div className="form-item">
                                    <input type="number" id="mobile_number" className="no-spinners" autoComplete="off" required />
                                    <label className="info-person" htmlFor="mobile_number">Mobile Number</label>
                                </div>
                                <div className="form-item">
                                    <DatePicker
                                        id="datepicker"
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="Date of Birth(DD/MM/YYYY)"
                                        className="form-control"
                                        autoComplete="off"
                                        required
                                    />
                                    <label
                                        className="info-person"
                                        htmlFor="datepicker"
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)} >
                                    </label>

                                    <svg className="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="edit-info-calender"
                                                d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className=" edit-info-calender" d="M16 3V7" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path className=" edit-info-calender" d="M8 3V7" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path className=" edit-info-calender" d="M4 11H20" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path className=" edit-info-calender" d="M8 15H10V17H8V15Z" stroke="#0F0F0F"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn print-continue-btn">
                                <Link to="#finger-print-modal" onClick={handleRedirect} data-bs-toggle="modal">
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Personal Information Screen===================================== --> */}
                {/* <!-- ====================================== Personal information Screen Modal ===================================== --> */}
                <div className="modal fade" id="finger-print-modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content finger-modal-content">
                            <div className="modal-body">
                                <div className="finger-print-modal-popup">
                                    <div className="finger-img-sec">
                                        <img src={CongratulationsImg} alt="Congratulation-img" />
                                    </div>
                                    <div className="finger-content-sec mt-32">
                                        <h2 className="congratulations">Congratulations!</h2>
                                        <p className="few-sec">Your account is ready to use. You will be redirected to the next page
                                            in a few seconds.
                                        </p>
                                        {showLoader && (
                                            <div className="loader2">
                                                <div className="sk-fading-circle">
                                                    {[...Array(12)].map((_, i) => (
                                                        <div key={i} className={`sk-circle${i + 1} sk-circle`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalInformation