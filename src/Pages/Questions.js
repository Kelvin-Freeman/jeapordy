import { Link } from "react-router-dom";

const Questions = () => {
    const questions = [
        { question: "Bitcoin", answer: "BTC" },
        { question: "Litecoin", answer: "LTC" },
        { question: "Ethereum", answer: "ETH" },
        { question: "Ethereum Classic", answer: "ETC" },
        { question: "Stellar Lumens", answer: "XLM" },
        { question: "Dash", answer: "DASH" },
        { question: "Ripple", answer: "XRP" },
        { question: "Zcash", answer: "ZEC" },
  ];
    return(
        <div>
            <h1>Questions Page</h1>
            {questions.map(inquiry => {
                const{question, answer} = inquiry
                return(
                    <Link to={`/questions/${answer}`}>
                        <h2>{question}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Questions