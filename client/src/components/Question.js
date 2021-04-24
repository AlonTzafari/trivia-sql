import {useState} from 'react'
import Rating from './Rating'

function Question({question, nextQ}) {
    
    console.log(question);
    const [showRating, setShowRating] = useState(false);

    const chooseAnswer = (correct) => {
        setShowRating(true);
    }

    function rateQ(rate) {
        nextQ();
    }

    return (
        <div>
            <p>{question.question}</p>
            <ol>
                {question.type === 3 ?
                <>
                    <li onClick={ () => chooseAnswer(question.answer === "yes") }>YES</li>
                    <li onClick={ () => chooseAnswer(question.answer === "no") }>NO</li>
                </> :
                <>
                    <li onClick={()=>chooseAnswer(true)}>{question.answer}</li>
                    <li onClick={()=>chooseAnswer(false)}>{question.optionA}</li>
                    <li onClick={()=>chooseAnswer(false)}>{question.optionB}</li>
                    <li onClick={()=>chooseAnswer(false)}>{question.optionC}</li>
                </>
                }
            </ol>
            {showRating ? <Rating rateQ={rateQ}/> : null}
        </div>
    )
}

export default Question
