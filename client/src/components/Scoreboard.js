import axios from 'axios'
import {useEffect, useState} from 'react'

function Scoreboard() {
    
    const [players, setPlayers] = useState([])
    const [questionLoad, setQuestionLoad] = useState("loading");

    useEffect(() => {
        setQuestionLoad("loading");
        axios.get("/scoreboard")
        .then(({data}) => {
            setPlayers(data)
            setQuestionLoad("loaded");

        })
        .catch(() => setQuestionLoad("failed"));
    }, [])
    return (
        <div>
            <h1>SCOREBOARD</h1>
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
