import React, { useEffect, useState } from "react";
import forgetPasswordImg from "../assets/images/forget_password_img.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1); 
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleSignIn = () => {
        navigate("/ConfirmOtp");
    };
    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Forget Password Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Forget Password</h1>
                        </div>
                        <div className="verify-section-main verify-section-main-forget">
                            <img className="verify-img" src={forgetPasswordImg} alt="forget_password_img" />
                            <p className="sub-text forget-pass">Select which contact details should we use to reset your password.
                            </p>
                            <div className="form">
                                <div className="form-item">
                                    <input type="text" id="username" autoComplete="off" required />
                                    <label htmlFor="username">via SMS</label>
                                    <div className="mobile-message-main">
                                        <svg className="mobile-message" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_3_4980" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_3_4980)">
                                                <path d="M11 3H21V11H18L14 13V11H11V3Z" stroke="#00D061" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                <path className="mobile-message"
                                                    d="M15 16V20C15 20.2652 14.8946 20.5196 14.7071 20.7071C14.5196 20.8946 14.2652 21 14 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H8"
                                                    stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M10 18V18.01" stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form-item form-item2">
                                    <input type="text" id="password" autoComplete="off" required />
                                    <label htmlFor="password">via Email</label>
                                    <div className="mobile-message-main">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <mask id="mask0_3_4968" maskUnits="userSpaceOnUse" x="0"
                                                y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_3_4968)">
                                                <path
                                                    d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
                                                    stroke="#00D061" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M3 7L12 13L21 7" stroke="#00D061" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn" onClick={handleSignIn}>
                                <Link to="/ConfirmOtp">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Forget Password Screen End ===================================== --> */}
            </div>
        </>
    )
}
export default ForgetPassword