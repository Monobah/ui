import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import dotsPattern from "../assets/images/dots_pattern.png"
import dotsPatternBottom from "../assets/images/dots_pattern_bottom.png"
import imageUnscreen from "../assets/images/Image.png"
import robotSlider from "../assets/images/robot-slider-img2.png"
import robotSlider3 from "../assets/images/robot-slider-img3.png"

const Splash = () => {
    /*------------------- Onboarding Screen -----------------------*/
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            id: 0,
            className: "first_slide",
            imgSrc: imageUnscreen,
            title: "Welcome to Amigo, Great Friend to Chat",
            content:
                "Proin molestie pulvinar vitae enim erat morbi eu. Malesuada eros nisi augue.",
        },
        {
            id: 1,
            className: "second_slide",
            imgSrc: robotSlider,
            title: "The Intelligent Way to Get Started",
            content:
                " Quisque blandit risus duis odio. In pretium nibh velit a aenean vitae porta euismod.",
        },
        {
            id: 2,
            className: "third_slide",
            imgSrc: robotSlider3,
            title: "Accelerate Your Learning with Amigo",
            content:
                "Pulvinar in et eu volutpat mauris viverra ut orci. Lacus placerat volutpat pharetra a.",
        },
    ];

    const handleNext = () => {
        if (activeSlide < slides.length - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    /*------------------- Screen loader -----------------------*/
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const splashTimer = setTimeout(() => {
            setShowSplash(false);
        }, 500 + 1000);
        return () => clearTimeout(splashTimer);
    }, []);


    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Loader Mask ===================================== --> */}
                {showSplash && (
                    <div className="loader-mask1">
                        <div id="splash-screen-page" className="position-relative">
                            <div className="dots_pattern_img1">
                                <img className="hekko" src={dotsPattern} alt="dots_pattern" />
                            </div>
                            <div className="splash-screen-logo">
                                <img className="logo_img" src={logo} alt="logo" />
                                <h1 className="AmigoGPT">Amigo GPT</h1>
                                <p className="meets">Where Intelligence Meets Innovation</p>
                            </div>
                            <div className="dots_pattern_img2">
                                <img className="hekko" src={dotsPatternBottom} alt="dots_pattern_bottom" />
                            </div>
                        </div>
                    </div>
                )}
                {/* <!-- ====================================== Loader Mask End===================================== --> */}
                {/* <!-- ====================================== Slider ===================================== --> */}
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide onboarding-slider" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`carousel-item ${slide.className} ${activeSlide === index ? "active" : ""}`}
                                    id={`slide${slide.id + 1}`}>
                                    <div className={`Onboarding-Screen-1 slide${slide.id + 1}`}>
                                        <div className="">
                                            <div className="Onboarding-Screen-1-full">
                                                <div className="boarding-title">
                                                    <div className="Image-unscreen_main">
                                                        <img className="Image-unscreen" src={slide.imgSrc} alt="unscreen" />
                                                        <h2 className="welcome_to_amigo_text">
                                                            {slide.title}
                                                        </h2>
                                                        <p className="proin">{slide.content}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex  align-items-center  justify-content-center">
                                                    {index < slides.length - 1 ? (
                                                        <div
                                                            className={`onboarding-next-btn-slider bottom-fix-btn skip_btn_${index + 1
                                                                }`}
                                                            onClick={handleNext}
                                                        >
                                                            <Link to="">Next</Link>
                                                        </div>
                                                    ) : (
                                                        <div className="onboarding-next-btn-slider bottom-fix-btn">
                                                            <Link to="/LetsYouIn">Get Started</Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-indicators custom-slider-btn">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    id={`slide${slide.id}`}
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={`custom-slider-dots ${activeSlide === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Slider End===================================== --> */}
            </div>
        </>
    );
};
export default Splash;
