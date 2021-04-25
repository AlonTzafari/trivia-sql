import {useState, useEffect} from 'react'
import Rating from './Rating'

function Question({question, nextQ, addStrike, addToScore}) {
    
    console.log(question);
    const [showRating, setShowRating] = useState(false);


    const chooseAnswer = (correct) => {
        if(showRating) return;
        setShowRating(true);
        if (correct) addToScore(100);
        if (!correct) addStrike();
    }

    function rateQ(rate) {
        nextQ();
    }

    const questions = [
        <li onClick={()=>chooseAnswer(true)}>{question.answer}</li>,
        <li onClick={()=>chooseAnswer(false)}>{question.optionA}</li>,
        <li onClick={()=>chooseAnswer(false)}>{question.optionB}</li>,
        <li onClick={()=>chooseAnswer(false)}>{question.optionC}</li>
    ];

    function shuffleArray(array) {
        for(let i = 0; i < array.length; i++) {
            const indexToShift = i + Math.floor(Math.random()*array.length - i);
            array.unshift(array.splice(indexToShift, 1)); 
        }
        return array;
    }

    useEffect(() => {
        shuffleArray(questions);
    }, [question])

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
                    { questions }
                </>
                }
            </ol>
            {showRating ? <Rating rateQ={rateQ}/> : null}
        </div>
    )
}

export default Question
