import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const LanguageSelect = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("select-lang1");

    const handleBackClick = () => {
        navigate(-1); 
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500); 
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleChange = (e) => {
        setSelectedLanguage(e.target.id);
    };

    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Language Select Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Select Language</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="main-text-group">
                                <h2 className="hey-jessica">Hey, Jessica</h2>
                                <p className="sub-text facilitate">Please select your preferred language to facilitate
                                    communication.
                                </p>
                            </div>
                            <form className="select-lang-sec">
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang1" name="select-language" checked={selectedLanguage === "select-lang1"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang" htmlFor="select-lang1">English</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang2" name="select-language" checked={selectedLanguage === "select-lang2"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang" htmlFor="select-lang2">Chinese</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang3" name="select-language" checked={selectedLanguage === "select-lang3"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang3">Hindi</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang4" name="select-language" checked={selectedLanguage === "select-lang4"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang4">Portuguese</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang5" name="select-language" checked={selectedLanguage === "select-lang5"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang5">Spanish</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang6" name="select-language" checked={selectedLanguage === "select-lang6"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang6">Arabic</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang7" name="select-language" checked={selectedLanguage === "select-lang7"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang7">Bulgarian</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang8" name="select-language" checked={selectedLanguage === "select-lang8"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang8">French</label>
                                </div>
                                <div className="lang-sec">
                                    <input type="radio" id="select-lang9" name="select-language" checked={selectedLanguage === "select-lang9"}
                                        onChange={handleChange} />
                                    <label className="custom-radio-sel-lang " htmlFor="select-lang9">Russian</label>
                                </div>
                            </form>
                            <div className="finger-print-sec-btn">
                                <div className="finger-print-sec-btn-wrapp laguage-bottom-buttons">
                                    <div className="print-skip-btn">
                                        <Link to="/ChooseInterests">Skip</Link>
                                    </div>
                                    <div className="print-next-btn">
                                        <Link to="/ChooseInterests">Next</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Language Select Screen End===================================== --> */}
            </div>
        </>
    )
}
export default LanguageSelect