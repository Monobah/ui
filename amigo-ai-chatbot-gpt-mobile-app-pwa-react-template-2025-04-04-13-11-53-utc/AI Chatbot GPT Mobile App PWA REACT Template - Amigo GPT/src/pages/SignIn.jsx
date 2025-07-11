import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import logo from "../assets/images/logo.png"
import FbIcon from "../assets/images/Icon-fb.png";
import GoogleIcon from "../assets/images/Icon-google.png";
import AppleIcon from "../assets/images/Icon-apple.png";
import WhatsappIcon from "../assets/images/Icon-whatsapp.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ReactFlagsSelect from "react-flags-select";

const Signin = () => {
    const [selected, setSelected] = useState("");// for Flag


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500); // Simulate loading time
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleSignIn = () => {
        navigate("/SignUp");
    };

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Sign In Screen===================================== --> */}
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
                    <div className="footer_box footer_sign_in">
                        <div className="container lets_you_in_box lets_you_in_box3">
                            <h1 className="d-none">hidden</h1>
                            <h2 className="lets_you_in_text">Sign In</h2>
                            <div className="form-group">
                                <div className="input-group input-group-sm">
                                    <ReactFlagsSelect
                                        selected={selected}
                                        onSelect={(code) => setSelected(code)}
                                        placeholder="+91"
                                    />
                                    <input id="mobile" placeholder="Enter Mobile Number" type="number" name="mobile"
                                        className="form-control no-spinners" />
                                </div>
                            </div>
                            <button className="sign_with_pass_btn" onClick={handleSignIn}>
                                Sign In
                            </button>
                            <div className="or" id="or-id">
                                <p>or continue with</p>
                            </div>
                            <div className="icons_main icons_main2">
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
                                    <img className="icons" src={WhatsappIcon} alt="Icon-whatsapp" /></a>
                            </div>
                        </div>
                    </div>
                    <footer id="let-you-footer">
                        <div className="block-footer">
                            <p>Don’t have an account? <Link to="/SignUp">Sign up</Link></p>
                        </div>
                    </footer>
                </div>
                {/* <!-- ====================================== Sign In Screen End===================================== --> */}
            </div>
        </>
    )
}

export default Signin