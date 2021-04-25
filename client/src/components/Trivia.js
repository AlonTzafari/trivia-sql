import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import Question from './Question';
import {userContext} from '../globalContext'
import { Link } from 'react-router-dom';

function Trivia() {

    const [question, setQuestion] = useState(null);
    const [questionLoad, setQuestionLoad] = useState("loading");
    const [strikes, setStrikes] = useState(0);
    const [score, setScore] = useState(0);
    const {userId} = useContext(userContext);

    useEffect(() => {
        updateQuestion();
    }, [])

    function updateQuestion() {
        setQuestionLoad("loading");
        axios.get('/trivia/question', {headers: {userId: userId}})
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

    return (
        <div>
            <h1>Trivia</h1>
            <p>SCORE:<span>{score}</span></p>
            <p>{`Strikes: ${strikes}`}</p>
            {strikes >= 3 ?
                <> 
                    <h2>WELL DONE</h2>
                    
                    <Link to="/login"><button>RESTART</button></Link>
                    <Link to="/scoreboard"><button>SCOREBOARD</button></Link>
                </> : 
                <>{
                    questionLoad === "loading" ? <h2>Loading...</h2> :
                    questionLoad === "failed" ? <h2>Failed loading </h2> :
                    questionLoad === "loaded" ? <Question question={question} nextQ={updateQuestion} addStrike={addStrike} addToScore={addToScore}/> : 
                    null
                }</>
            }
        </div>
    )
}

export default Trivia
