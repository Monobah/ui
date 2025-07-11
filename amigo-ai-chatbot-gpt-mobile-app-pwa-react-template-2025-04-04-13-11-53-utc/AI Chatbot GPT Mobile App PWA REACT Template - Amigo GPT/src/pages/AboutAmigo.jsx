import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/twitter.png"
import youtube from "../assets/images/youtube.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const AboutAmigo = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleBackClick = () => {
        navigate(-1);
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
                {/* <!-- ====================================== About Screen Start===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <header className="back-btn back-btn2 top-navbar" id="top-navbar">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>About Amigo GPT</h1>
                        </header>
                        <div className="verify-section-main align-items-stretch">
                            <div className="about_text_content">
                                <p className="about-content">Fusce amet rhoncus amet duis dignissim. Vulputate ultrices eget
                                    condimentum sit ullamcorper et dolor. Mauris in velit elit egestas pellentesque. Iaculis
                                    vitae in convallis tincidunt in leo phasellus donec volutpat.
                                </p>
                                <p className="about-content">Sed tempor consequat vivamus sagittis lorem in lorem. Mattis metus
                                    venenatis molestie risus pellentesque diam risus sit vestibulum. Molestie orci eget nunc
                                    risus egestas.
                                </p>
                                <p className="about-content">Morbi semper sed risus velit tincidunt. In volutpat eu tortor mauris
                                    ipsum tincidunt in ut eu. Ut odio orci commodo nisl nunc lacus erat porttitor. Non sed
                                    quisque elit dignissim. Purus at sit amet tempus mauris congue id nulla. Diam aenean
                                    ullamcorper sed eros lorem libero arcu sit. Sed nunc nulla id et ornare laoreet malesuada.
                                    Ac in eu turpis vitae.
                                </p>
                            </div>
                            <h2 className="follow_us">Follow Us</h2>
                            <div className="media-icon-main">
                                <a href="https://www.facebook.com">
                                    <img className="media-icon" src={facebook} alt="facebook" />
                                    <p className="media-icon-name">Facebook</p>
                                </a>
                                <a href="https://www.instagram.com">
                                    <img className="media-icon" src={insta} alt="insta" />
                                    <p className="media-icon-name">Instagram</p>
                                </a>
                                <a href="https://twitter.com">
                                    <img className="media-icon" src={twitter} alt="twitter" />
                                    <p className="media-icon-name">Twitter</p>
                                </a>
                                <a href="https://www.youtube.com">
                                    <img className="media-icon" src={youtube} alt="youtube" />
                                    <p className="media-icon-name">YouTube</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== About Screen End===================================== --> */}
            </div>
        </>
    )
}

export default AboutAmigo