import React from 'react';

export function Comment ({comment}){
    const {date, text, rating} = comment;
    return(
        <div>
            <div>{date}</div>
            <div>{rating}</div>
            <div>{text}</div>
        </div>
    )
}