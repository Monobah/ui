import React, { useEffect, useState } from "react";
import girlImg from "../assets/images/girl.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PersonalInfoUpdate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [profilePic, setProfilePic] = useState(girlImg);
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

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSignIn = () => {
        navigate("/AmigoGptHome");
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
                {/* < !-- ====================================== Personal Info Update Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Personal Info Update </h1>
                        </div>
                        <div className="verify-section-main verify-section-main-forget">
                            <div className="camera_main  position-relative">
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
                                    <input type="text" id="Name" autoComplete="off" required />
                                    <label className="info-person" htmlFor="Name">Name</label>
                                    <svg className="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="edit-info-svg"
                                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg"
                                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="email" autoComplete="off" required />
                                    <label className="info-person" htmlFor="email">Email Address</label>
                                    <svg className="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="edit-info-svg"
                                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg"
                                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="address" autoComplete="off" required />
                                    <label className="info-person" htmlFor="address">Address</label>
                                    <svg className="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="edit-info-svg"
                                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg"
                                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
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
                                            <path className="edit-info-svg"
                                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg"
                                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="Gender" className="no-spinners" autoComplete="off" required />
                                    <label className="info-person" htmlFor="Gender">Gender</label>
                                    <svg className="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="edit-info-svg"
                                                d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg"
                                                d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                                stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path className="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn-new-payment update-info-btn" onClick={handleSignIn}>
                                <Link to="/AmigoGptHome">Update Changes</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Personal Info Update Screen End ===================================== --> */}
            </div>
        </>
    )
}
export default PersonalInfoUpdate