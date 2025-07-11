import React, { useEffect, useState } from "react";
import notificationImg from "../assets/images/notification-img.png"
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const NotificationAllow = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

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
        navigate("/ForgetPassword");
    };
    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Notifiaction Allow Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Notification</h1>
                        </div>
                        <div className="verify-section-main">
                            <img className="verify-img" src={notificationImg} alt="notification-img" />
                            <p className="sub-text notified">Stay notified about new car, offer status and other updates. You can
                                turn off any time from setting.</p>
                            <div className="bottom-fix-btn Allow_notification_btn" onClick={handleSignIn}>
                                <Link to="/ForgetPassword">Allow</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Notifiaction Allow Screen End ===================================== --> */}
            </div>
        </>
    )
}

export default NotificationAllow