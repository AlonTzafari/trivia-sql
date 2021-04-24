import React from 'react'

function Rating({rateQ}) {
    return (
        <div onClick={()=>rateQ(5)}>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
        </div>
    )
}

export default Rating
