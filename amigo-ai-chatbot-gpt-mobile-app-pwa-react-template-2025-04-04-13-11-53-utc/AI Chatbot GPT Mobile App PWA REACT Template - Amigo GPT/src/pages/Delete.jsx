import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Delete = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
    };
    const handleSignIn = () => {
        navigate("/");
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
                {/* <!-- ====================================== Delete Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Delete Account</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <h2 className="privacy_manage">Why are you leaving PayFast?</h2>
                            <p className="leave-text deactivate_your_account support">We’re sorry to see you go! We’d love to know
                                why you want to delete your account, so we can improve the app and support our community.
                            </p>
                            <div className="d-flex justify-content-between leaving-box">
                                <h3 className="privacy_manage permission p-0">I’m leaving temporarily</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between leaving-box">
                                <h3 className="privacy_manage permission p-0">I’m on PayFast too much</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between leaving-box">
                                <h3 className="privacy_manage permission p-0">Too many irrelevant ads</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between leaving-box">
                                <h3 className="privacy_manage permission p-0">Trouble getting startrd</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between leaving-box">
                                <h3 className="privacy_manage permission p-0">I have multiple account</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" defaultChecked />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between leaving-box border-bottom-0">
                                <h3 className="privacy_manage permission p-0">Another reason</h3>
                                <div className="form-check border-bottom px-0 custom-radio">
                                    <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                        value="delete" />
                                </div>
                            </div>
                            <p className="tapping">Tapping “Delete Account” will delete PayFast account
                                <span className="jesssmi"> Jessica Smith.</span>
                            </p>
                            <div className="print-continue-btn-head">
                                <div className="onboarding-next-btn-plus2 bottom-fix-btn" onClick={handleSignIn}>
                                    <Link to="/">Delete Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Delete Screen End===================================== --> */}
            </div>
        </>
    )
}

export default Delete