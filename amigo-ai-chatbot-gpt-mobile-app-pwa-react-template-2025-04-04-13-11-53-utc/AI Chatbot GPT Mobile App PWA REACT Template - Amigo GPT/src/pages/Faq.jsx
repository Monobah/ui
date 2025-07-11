import React, { useEffect, useState } from "react";
import buttonBack from "../assets/images/Button-Back.png"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const faqsData = [
    {
        title: "General",
        questions: [
            {
                q: "What is Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How to use Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "Is Amigo GPT free to use?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How do I can delete my account?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            }
        ]
    },
    {
        title: "How to send message to Amigo GPT",
        questions: [
            {
                q: "What is Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "Is Amigo GPT free to use?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How do I can delete my account?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            }
        ]
    },
    {
        title: "How I can leave chat with Amigo GPT?",
        questions: [
            {
                q: "What is Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "Is Amigo GPT free to use?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How do I can delete my account?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            }
        ]
    },
    {
        title: "How do I delete chat with Amigo GPT?",
        questions: [
            {
                q: "What is Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "Is Amigo GPT free to use?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How do I can delete my account?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            }
        ]
    },
    {
        title: "How do I export chat in Amigo GPT?",
        questions: [
            {
                q: "What is Amigo GPT?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "Is Amigo GPT free to use?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            },
            {
                q: "How do I can delete my account?",
                a: "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request.It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location."
            }
        ]
    }
];
const Faq = () => {
    const [openGroupIndex, setOpenGroupIndex] = useState(null);
    const [openQuestionKey, setOpenQuestionKey] = useState(null);

    const toggleGroup = (groupIndex) => {
        setOpenGroupIndex(prev => (prev === groupIndex ? null : groupIndex));
        setOpenQuestionKey(null); // reset inner open state
    };

    const toggleQuestion = (groupIndex, questionIndex) => {
        const key = `${groupIndex}-${questionIndex}`;
        setOpenQuestionKey(prev => (prev === key ? null : key));
    };



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
                {/* < !-- ====================================== FAQ Screen ===================================== --> */}
                <div className="verification-main">
                    <div className="container verify-screen-main p-0">
                        <div className="back-btn back-btn2">
                            <Link onClick={handleBackClick}>
                                <img className="profile-pic" src={buttonBack} alt="Button-Back" />
                            </Link>
                            <h1>FAQs</h1>
                            <h2 className="d-none">hidden</h2>
                        </div>
                        <div className="verify-section-main align-items-stretch">
                            <section id="faq-sec">
                                {faqsData.map((group, groupIndex) => {
                                    const isGroupOpen = openGroupIndex === groupIndex;
                                    return (
                                        <div className="nested-accordion" key={groupIndex}>
                                            <h3
                                                className={`boder-top ${isGroupOpen ? 'selected' : ''}`}
                                                onClick={() => toggleGroup(groupIndex)}
                                            >
                                                {group.title}
                                            </h3>

                                            <div className={`comment ${isGroupOpen ? 'visible' : 'hidden'}`}>
                                                {group.questions.map((item, questionIndex) => {
                                                    const key = `${groupIndex}-${questionIndex}`;
                                                    const isQuestionOpen = openQuestionKey === key;

                                                    return (
                                                        <div className="nested-accordion" key={questionIndex}>
                                                            <h3
                                                                className={`faq-txt1 ${isQuestionOpen ? 'selected' : ''}`}
                                                                onClick={() => toggleQuestion(groupIndex, questionIndex)}
                                                            >
                                                                {item.q}
                                                            </h3>
                                                            <div className={`comment ${isQuestionOpen ? 'visible' : 'hidden'}`}>
                                                                {item.a}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                <div className="boder-top1"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================================== FAQ Screen End ===================================== --> */}
            </div>
        </>
    )
}

export default Faq