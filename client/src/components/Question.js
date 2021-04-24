import React from 'react'

function Question({question}) {
    return (
        <div>
            <p>{question.question}</p>
            <ol>
                <li>{question.answer}</li>
                <li>{question.optionA}</li>
                <li>{question.optionB}</li>
                <li>{question.optionC}</li>
            </ol>
        </div>
    )
}

export default Question
