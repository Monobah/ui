import React, { useEffect, useState } from "react";
import NewPasswordImg from "../assets/images/new_password-img.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const NewPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
        navigate("/PersonalInformation");
    };

    // Password hide show
    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setPasswordVisible(!passwordVisible);
        } else if (field === "confirm-password") {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== New Password Screen===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Create New Password</h1>
                        </div>
                        <div className="verify-section-main verify-section-main-forget">
                            <img className="verify-img" src={NewPasswordImg} alt="new_password-img" />
                            <p className="sub-text forget-pass">Create Your New Password</p>
                            <div className="new_password_input">
                                <div className="form-item">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="info-person" htmlFor="password">New Password</label>
                                    <i
                                        className={`ri ${passwordVisible ? "ri-eye-fill" : "ri-eye-off-fill"}`}
                                        onClick={() => togglePasswordVisibility("password")} id="eye"
                                    ></i>
                                </div>
                                <div className="form-item">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        id="confirm-password"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="info-person" htmlFor="confirm-password">Re Enter New Password</label>
                                    <i className={`ri ${confirmPasswordVisible ? "ri-eye-fill" : "ri-eye-off-fill"}`}
                                        onClick={() => togglePasswordVisibility("confirm-password")} id="eye1"
                                    ></i>
                                </div>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn" onClick={handleSignIn}>
                                <Link to="/PersonalInformation">Change Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== New Password Screen End===================================== --> */}
            </div>
        </>
    )
}
export default NewPassword