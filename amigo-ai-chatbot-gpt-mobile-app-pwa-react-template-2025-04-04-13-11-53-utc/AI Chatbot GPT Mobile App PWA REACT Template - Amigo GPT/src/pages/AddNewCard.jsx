import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import visaIcon from "../assets/images/visa-icon.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DatePicker from "react-datepicker";


const AddNewCard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [maskedCardNumber, setMaskedCardNumber] = useState('*** **** **** 0000');
    const [expiryDate, setExpiryDate] = useState(null);
    const [cvv, setCvv] = useState('');

    const handleCardNameChange = (e) => {
        setCardName(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
        setCardNumber(value);

        const masked = value
            .split('')
            .map((char, i) => (i < 12 ? '*' : char))
            .join('');

        const maskedFormatted = masked
            .replace(/(.{4})/g, '$1 ')
            .trim();

        setMaskedCardNumber(maskedFormatted);
    };

    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 3);
        setCvv(value);
    };

    const handleDateChange = (date) => {
        setExpiryDate(date);
    };

    const formatDate = (date) => {
        if (!date) return '**/**';
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2);
        return `${month}/${year}`;
    };



    const handleBackClick = () => {
        navigate(-1);
    };
    const handleSignIn = () => {
        navigate("/PaymentMethod");
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
                {/* <!-- ====================================== Add New card Screen===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Add New Card</h1>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <div className="position-relative demo-visa">
                                <div>
                                    <img className="hello-visa" src={visaIcon} alt="visa" />
                                </div>
                                <p className="card-hidden-number" id="lokiCardNumber">
                                    {maskedCardNumber}
                                </p>
                                <div className="card-name-jessica-main">
                                    <p className="card-name-jessica" id="lokiCardName">
                                        {cardName || 'Jessica Smith'}
                                    </p>
                                    <div className="card-name-jessica-main-sub">
                                        <p className="card-date-cvv" id="lokiExpiryDate">
                                            {formatDate(expiryDate)}
                                        </p>
                                        <p className="card-date-cvv" id="lokiCVV">
                                            {cvv || '***'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="new_password_input" id="new-card-inputs">
                                <div className="form-item">
                                    <input
                                        type="text"
                                        id="username"
                                        autoComplete="off"
                                        required
                                        value={cardName}
                                        onChange={handleCardNameChange}
                                    />
                                    <label className="info-person" htmlFor="username">Card Name</label>
                                </div>

                                <div className="form-item">
                                    <input
                                        type="text"
                                        required
                                        pattern="\d*"
                                        className="no-spinners"
                                        id="cardNumber"
                                        maxLength="16"
                                        value={cardNumber}
                                        onChange={handleCardNumberChange}
                                    />
                                    <label className="info-person" htmlFor="cardNumber"> Card Number</label>
                                </div>

                                <div className="date-number-cvv">
                                    <div className="form-item">
                                        <DatePicker
                                            selected={expiryDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/yy"
                                            className="no-spinners"
                                            placeholderText="Expiry Date"
                                            required
                                            name="date"
                                            id="datepicker"
                                            showMonthYearPicker
                                        />
                                    </div>

                                    <div className="form-item">
                                        <input
                                            type="text"
                                            className="no-spinners"
                                            id="threeDigitInput"
                                            maxLength="3"
                                            value={cvv}
                                            onChange={handleCvvChange}
                                            required
                                        />
                                        <label className="info-person" htmlFor="threeDigitInput">CVV</label>
                                    </div>
                                </div>
                            </div>
                            <div className="print-continue-btn-head">
                                <div className="bottom-fix-btn onboarding-next-btn-plus"
                                    onClick={handleSignIn}>
                                    <Link to="/PaymentMethod">Add My Card</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Add New card Screen End===================================== --> */}
            </div>
        </>
    )
}

export default AddNewCard