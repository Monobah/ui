import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import createNewPinImg from "../assets/images/create-new-pin-img.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const CreateNewPin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [otp, setOtp] = useState(["", "", "", ""]);

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
        navigate("/FingerPrintScan");
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
                {/* < !-- ====================================== Create new pin Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Create New PIN</h1>
                        </div>
                        <div className="verify-section-main">
                            <img className="verify-img" src={createNewPinImg} alt="create-new-pin-img" />
                            <p className="sub-text">Add a PIN Number to make your account more secure.</p>
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
                            <div className="bottom-fix-btn onboarding-next-btn-Subscribe"
                                onClick={handleSignIn}>
                                <Link to="/FingerPrintScan">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Create new pin Screen End===================================== --> */}
            </div>
        </>
    )
}

export default CreateNewPin