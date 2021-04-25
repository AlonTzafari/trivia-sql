import {useState} from 'react'
import Rating from './Rating'

function Question({question, nextQ, addStrike}) {
    
    console.log(question);
    const [showRating, setShowRating] = useState(false);

    const chooseAnswer = (correct) => {
        setShowRating(true);
        if (!correct) addStrike();
    }

    function rateQ(rate) {
        nextQ();
    }

    function shuffleArray(array) {
        const arr = [...array];
        for(let i = 0; i < arr.length; i++) {
            const indexToShift = i + Math.floor(Math.random()*arr.length - i);
            arr.unshift(arr.splice(indexToShift, 1)); 
        }
        return arr;
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
                    {
                        shuffleArray([
                            <li onClick={()=>chooseAnswer(true)}>{question.answer}</li>,
                            <li onClick={()=>chooseAnswer(false)}>{question.optionA}</li>,
                            <li onClick={()=>chooseAnswer(false)}>{question.optionB}</li>,
                            <li onClick={()=>chooseAnswer(false)}>{question.optionC}</li>
                        ])
                    }
                </>
                }
            </ol>
            {showRating ? <Rating rateQ={rateQ}/> : null}
        </div>
    )
}

export default Question
