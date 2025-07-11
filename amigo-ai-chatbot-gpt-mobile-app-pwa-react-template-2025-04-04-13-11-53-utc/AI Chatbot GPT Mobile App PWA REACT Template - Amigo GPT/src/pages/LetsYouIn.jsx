import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import logo from "../assets/images/logo.png"
import FbIcon from "../assets/images/Icon-fb.png";
import GoogleIcon from "../assets/images/Icon-google.png";
import AppleIcon from "../assets/images/Icon-apple.png";
import WhatsappIcon from "../assets/images/Icon-whatsapp.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const LetsYouIn = () => {
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
        navigate("/SignIn");
    };

    return (
        <>
            <div className="site_content">
                {/* < !-- ====================================== Let You Screen ===================================== --> */}
                <div className="let-you-page-main">
                    <div className="let-you-screen-main">
                        <header className="back-btn back-btn2 top-navbar" id="top-navbar">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                        </header>
                        <div className="Amigo_img_main">
                            <img className="Amigo_img" src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="footer_box footer_box">
                        <div className="lets_you_in_box lets_you_in_box2">
                            <h1 className="d-none">hidden</h1>
                            <h2 className="lets_you_in_text">Let's You In</h2>
                            <div className="icons_main">
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <img className="icons" src={FbIcon} alt="Icon-fb" />
                                </a>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                                    <img className="icons" src={GoogleIcon} alt="Icon-google" />
                                </a>
                                <a href="https://www.icloud.com" target="_blank" rel="noreferrer">
                                    <div className="apple-main">
                                        <img className="apple" src={AppleIcon} alt="Icon-apple" />
                                    </div>
                                </a>
                                <a href="https://wa.me/+12345678899" target="_blank" rel="noreferrer">
                                    <img className="icons" src={WhatsappIcon} alt="Icon-whatsapp" />
                                </a>
                            </div>
                            <div className="or">
                                <p>or</p>
                            </div>
                            <button className="sign_with_pass_btn" onClick={handleSignIn}>Sign In With
                                Password</button>
                        </div>
                    </div>
                    <footer id="let-you-footer">
                        <div className="block-footer">
                            <p>Don’t have an account? <Link to="/SignUp">Sign up</Link></p>
                        </div>
                    </footer>
                </div>
                {/* <!-- ====================================== Let You Screen End ===================================== --> */}
            </div>
        </>
    )
}
export default LetsYouIn