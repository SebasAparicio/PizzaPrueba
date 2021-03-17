import React from 'react';
import {TimeService} from '../../../../services/time-service';

export function Comment ({comment}){
    const {date, text, rating} = comment;
    return(
        <div>
            <div>{TimeService.shortDate(date)}</div>
            <div>{rating}</div>
            <div>{text}</div>
        </div>
    )
}