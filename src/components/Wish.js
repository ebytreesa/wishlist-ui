import React from 'react'


const Wish = (props) => {
    return (
        <div>
            <h5 key={props.wish.id}>{props.wish.title}</h5>
        </div>
    )
}

export default Wish
