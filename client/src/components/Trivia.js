import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import Question from './Question';
import {userContext} from '../globalContext'

function Trivia() {

    const [question, setQuestion] = useState(null);
    const [questionLoad, setQuestionLoad] = useState("loading");
    const [strikes, setStrikes] = useState(0);
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

    return (
        <div>
            <h1>Trivia</h1>
            <p>user: {userId}</p>
            {
                questionLoad === "loading" ? <h2>Loading...</h2> :
                questionLoad === "failed" ? <h2>Failed loading </h2> :
                questionLoad === "loaded" ? <Question question={question} nextQ={updateQuestion} /> : 
                null
            }
            
        </div>
    )
}

export default Trivia
