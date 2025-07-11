import React, { useEffect, useState } from "react";
import verifyImg from "../assets/images/verify-img.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const VerifyPhoneNumber = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [otp, setOtp] = useState(["", "", "", ""]);// otp box

    const handleBackClick = () => {
        navigate(-1); // This will navigate to the previous page in the history stack
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500); // Simulate loading time
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleSignIn = () => {
        navigate("/NotificationAllow");
    };

    // Otp Section
    const validateInput = (value, index) => {
        let newValue = value.replace(/\D/g, "");
        if (newValue.length > 1) {
            newValue = newValue[0];
        }
        const newOtp = [...otp];
        newOtp[index] = newValue;
        setOtp(newOtp);
    };

    const handleChange = (e, index) => {
        validateInput(e.target.value, index);
    };
    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Verify Phone number Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Verify Phone Number</h1>
                        </div>
                        <div className="verify-section-main">
                            <img className="verify-img" src={verifyImg} alt="verify-img" />
                            <p className="sub-text">Please enter the verification code we sent to your mobile *** *** **65</p>
                            <div className="otp-field">
                                {otp.map((val, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        className="no-spinners"
                                        value={val}
                                        onChange={(e) => handleChange(e, index)}
                                        maxLength={1}
                                        name="otp"
                                    />
                                ))}
                            </div>
                            <div className="block-footer resend-otp">
                                <p>Not yet get? <Link to="/VerifyPhoneNumber">Resend OTP</Link></p>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn" onClick={handleSignIn}>
                                <Link to="/NotificationAllow">Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Verify Phone number Screen End===================================== --> */}
            </div>
        </>
    )
}

export default VerifyPhoneNumber