import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import Question from './Question';
import {userContext} from '../globalContext'

function Trivia() {

    const [question, setQuestion] = useState();
    const {userId} = useContext(userContext);

    useEffect(() => {
        axios.get('/trivia/question', {headers: {userId: userId}})
        .then( ({data}) => {
            console.log(data);
            setQuestion(data)
        } );
    }, [userId])

    return (
        <div>
            <h1>Trivia</h1>
            <p>user: {userId}</p>
            {question ? <Question question={question}/> : null}
            
        </div>
    )
}

export default Trivia
