import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const DeleteDeactivate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [selectedAction, setSelectedAction] = useState("");

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

    // Page click Redirct
    const continueAction = () => {
        if (selectedAction === "delete") {
            navigate("/delete");
        } else if (selectedAction === "deactivate") {
            navigate("/deactivate");
        }
    };
    return (
        <>
            <div className="site_content">
                {/* <!-- ====================================== Delete Deactivate Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>Delete or Deactivate</h1>
                            <h2 className="d-none">hidden</h2>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <p className="leave-text">If you want to leave Amigo GPT temporarily, simply deactivate your account. If
                                you choose to delete your account instead, you won’t be able to recover it after 30 days.</p>
                            <form id="deleteDeactivateForm">
                                <div className="permission-box permission-box2">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="privacy_manage permission">Deactivate Account</h3>
                                        <div className="form-check border-bottom px-0 custom-radio">
                                            <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                                value="deactivate" checked={selectedAction === "deactivate"}
                                                onChange={(e) => setSelectedAction(e.target.value)} />
                                        </div>
                                    </div>
                                    <p className="keep">No one can see your account, including all content that is stored in it.
                                        Reactivate your account and recover all content anytime.</p>
                                </div>
                                <div className="permission-box permission-box-bottom">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="privacy_manage permission">Delete Account Permanently</h3>
                                        <div className="form-check border-bottom px-0 custom-radio">
                                            <input className="form-check-input-radio form-check-input-radio2" type="radio" name="action"
                                                value="delete"
                                                checked={selectedAction === "delete"}
                                                onChange={(e) => setSelectedAction(e.target.value)} />
                                        </div>
                                    </div>
                                    <p className="keep">Your account and content will be deleted permanently. You may cancel the
                                        deletion request by reactivating your account within 30 days.</p>
                                </div>
                            </form>
                            <div className="print-continue-btn-head">
                                <div className="onboarding-next-btn-plus  bottom-fix-btn" onClick={continueAction}>
                                    <Link to="#" onClick={continueAction} >Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== Delete Deactivate Screen End===================================== --> */}
            </div>
        </>
    )
}

export default DeleteDeactivate