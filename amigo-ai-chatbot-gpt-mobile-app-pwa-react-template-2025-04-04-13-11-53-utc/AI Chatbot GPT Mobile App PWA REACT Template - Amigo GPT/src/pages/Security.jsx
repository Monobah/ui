import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Security = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
    };
    const handleSignIn = () => {
        navigate("/CreateNewPin");
    };

    const handleForgetPassword = () => {
        navigate("/ForgetPassword");
    };

    // page loader
    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Security Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Security</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="swiches-toggle">
                                <p className="remember">Remember Me</p>
                                <div className="check-box">
                                    <input type="checkbox" name="biometric" />
                                </div>
                            </div>
                            <div className="swiches-toggle">
                                <p className="remember">Biometric ID</p>
                                <div className="check-box">
                                    <input type="checkbox" name="biometric" />
                                </div>
                            </div>
                            <div className="swiches-toggle">
                                <p className="remember">Face ID</p>
                                <div className="check-box">
                                    <input type="checkbox" name="biometric" />
                                </div>
                            </div>
                            <div className="swiches-toggle border-bottom-0">
                                <p className="remember">Two-Factor Authentication</p>
                                <div className="check-box">
                                    <input type="checkbox" name="biometric" />
                                </div>
                            </div>
                            <button className="end-session cancel-btn security-bottom-btns"
                                onClick={handleSignIn}>Change PIN</button>
                            <button className="end-session cancel-btn" onClick={handleForgetPassword}>Change
                                Password</button>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Security Screen End ===================================== --> */}
            </div>
        </>
    )
}

export default Security