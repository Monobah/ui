import React, { useEffect, useState } from "react";
import confirmOtpImg from "../assets/images/confirm-otp-img.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";


const ConfirmOtp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(59);

    // Count timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        setTimeout(() => setLoading(false), 500); // Simulate loading time
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleSignIn = () => {
        navigate("/NewPassword");
    };

    const handleBackClick = () => {
        navigate(-1);
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
                {/* <!-- ====================================== Confirm OTP Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Confirm OTP</h1>
                        </div>
                        <div className="verify-section-main">
                            <img className="verify-img" src={confirmOtpImg} alt="confirm-otp-img" />
                            <p className="sub-text">Code has been send to +1 234 *** **99</p>
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
                                <p>
                                    {" "}
                                    Code Expire in <span id="countdowntimer">{timeLeft}</span>
                                    {" "}
                                </p>
                            </div>
                            <div className="bottom-fix-btn onboarding-next-btn-Subscribe" onClick={handleSignIn}>
                                <Link to="/NewPassword">Confirm</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Confirm OTP Screen End===================================== --> */}
            </div>
        </>
    )
}

export default ConfirmOtp
