import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Feedback = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Choose Your Subject");
    const [selectedValue, setSelectedValue] = useState(null);


    const handleBackClick = () => {
        navigate(-1);
    };
    const handleSignIn = () => {
        navigate("/AmigoGptHome");
    };
    // page loader
    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    // Drop DOwn
    const options = [
        { value: 1, label: "Good" },
        { value: 2, label: "Bad" },
        { value: 3, label: "Excellent" },
        { value: 4, label: "Other" },
    ];

    const handleSelect = (option) => {
        setSelected(option.label);
        setSelectedValue(option.value);
        setIsActive(false);
    };
    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Feedback Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Your Feedback</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="sign-in-full-section ">
                                <form className="forget-password-screen-form">
                                    <div className="feedback-sec">
                                        <label className="feedback-lbl" htmlFor="Email"> Your Email Address</label>
                                        <input type="email" id="Email" placeholder="Write here" autoComplete="off" className="feedback-sec-txt" />
                                    </div>
                                    <label className="feedback-lbl feedback-text-spacer">Select Subject (Optional)</label>
                                    <div className="select-dropdown__button" onClick={() => setIsActive(!isActive)}>
                                        <div className="select-dropdown" data-value={selectedValue}>
                                            <span>{selected}</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                            <ul className={`select-dropdown__list ${isActive ? "active" : ""}`}>
                                                {options.map((option) => (
                                                    <li
                                                        key={option.value}
                                                        data-value={option.value}
                                                        className="select-dropdown__list-item"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent parent click
                                                            handleSelect(option);
                                                        }}
                                                    >
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="feedback-text feedback-text-spacer">
                                        <label className="feedback-lbl" htmlFor="mesasag">Description</label>
                                        <textarea rows="4" className="feedback-tp" placeholder="Write here..." name="mesasag" id="mesasag"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="print-continue-btn-head">
                                <div className="onboarding-next-btn-plus bottom-fix-btn" onClick={handleSignIn}>
                                    <Link to="/AmigoGptHome">Submit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Feedback Screen End===================================== --> */}
            </div>
        </>
    )
}

export default Feedback