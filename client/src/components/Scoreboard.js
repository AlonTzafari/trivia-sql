import api from '../api'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

function Scoreboard() {
    
    const [players, setPlayers] = useState([])
    const [questionLoad, setQuestionLoad] = useState("loading");

    useEffect(() => {
        setQuestionLoad("loading");
        api.get("/api/scoreboard")
        .then(({data}) => {
            setPlayers(data)
            setQuestionLoad("loaded");

        })
        .catch(() => setQuestionLoad("failed"));
    }, [])
    return (
        <div>
            <h1>SCOREBOARD</h1>
            <Link to='/profile'>HOME</Link>
            {
                questionLoad === "loading" ? <h2>Loading...</h2> :
                questionLoad === "failed" ? <h2>Loading Failed</h2> :
                questionLoad === "loaded" ? 
                <ol>
                    {players.map(( player,i) => <li key={i}><span>{player.name}</span>----------------<span>{player.score}</span></li>)}
                </ol> 
                : null
            }
        </div>
    )
}

export default Scoreboard
