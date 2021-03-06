import api from '../api';
import {useEffect, useState} from 'react'
import Question from './Question';
import { Link } from 'react-router-dom';

function Trivia() {

    const [question, setQuestion] = useState(null);
    const [questionLoad, setQuestionLoad] = useState("loading");
    const [strikes, setStrikes] = useState(0);
    const [score, setScore] = useState(0);
    const [questionRating, setQuestionRating] = useState([]);

    useEffect(() => {
        updateQuestion();
    }, [])

    useEffect(() => {
        if (strikes >= 3) {
            api.put("api/trivia/end", {ratings: questionRating, score});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [strikes])

    function updateQuestion() {
        setQuestionLoad("loading");
        api.get('api/trivia/question')
        .then( ({data}) => {
            setQuestion(data);
            setQuestionLoad("loaded");
        } ).catch(() => setQuestionLoad("failed") );
    }

    function addStrike() {
        setStrikes(strikes + 1);
    }

    function addToScore(amount) {
        setScore(score + amount);
    }

    function addRating(rating) {
        setQuestionRating( [...questionRating, rating]);
    }

    return (
        <div>
            <h1>Trivia</h1>
            <p>SCORE:<span>{score}</span></p>
            <p>{`Strikes: ${strikes}`}</p>
            {strikes >= 3 ?
                <> 
                    <h2>WELL DONE</h2>
                    
                    <Link to="/profile"><button>HOME</button></Link>
                    <Link to="/scoreboard"><button>SCOREBOARD</button></Link>
                </> : 
                <>{
                    questionLoad === "loading" ? <h2>Loading...</h2> :
                    questionLoad === "failed" ? <h2>Failed loading </h2> :
                    questionLoad === "loaded" ? <Question question={question} nextQ={updateQuestion} addStrike={addStrike} addToScore={addToScore} addRating={addRating}/> : 
                    null
                }</>
            }
        </div>
    )
}

export default Trivia
