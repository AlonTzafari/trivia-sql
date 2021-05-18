import React from 'react'

function Rating({rateQ}) {

    return (
        <div >
            <input id="rate1" type="radio" name="rating" value={1} onClick={() => rateQ(1)}/>
            <label htmlFor="rate1">1</label>
            <input id="rate2" type="radio" name="rating" value={2} onClick={() => rateQ(2)}/>
            <label htmlFor="rate2">2</label>
            <input id="rate3" type="radio" name="rating" value={3} onClick={() => rateQ(3)}/>
            <label htmlFor="rate3">3</label>
            <input id="rate4" type="radio" name="rating" value={4} onClick={() => rateQ(4)}/>
            <label htmlFor="rate4">4</label>
            <input id="rate5" type="radio" name="rating" value={5} onClick={() => rateQ(5)}/>
            <label htmlFor="rate5">5</label>
        </div>
    )
}

export default Rating
