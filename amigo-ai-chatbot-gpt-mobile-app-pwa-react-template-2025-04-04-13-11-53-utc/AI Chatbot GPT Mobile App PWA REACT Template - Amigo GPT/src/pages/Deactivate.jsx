import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Deactivate = () => {
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
                {/* <!-- ====================================== Deactivate Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Deactivate</h1>
                        </div>
                        <div className="amigo-chat-AI-main">
                            <h2 className="privacy_manage">Jessica Smith: Deactivate this account?</h2>
                            <p className="leave-text deactivate_your_account">If you deactivate your account:</p>
                            <ul className="deactivate-list">
                                <li>No one will see your account and content.</li>
                                <li>Information that isn’t stored in your account.</li>
                                <li>Amigo GPT will continue to keep your data so that you can recover it when you reactivate
                                    your account.</li>
                                <li>You can reactivate your account and recover all content anytime by using the same login
                                    details.
                                </li>
                            </ul>
                            <div className="print-continue-btn-head">
                                <div className="onboarding-next-btn-plus bottom-fix-btn" onClick={handleSignIn}>
                                    <Link to="/">Deactivate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Deactivate Screen End ===================================== --> */}
            </div>
        </>
    )
}
export default Deactivate