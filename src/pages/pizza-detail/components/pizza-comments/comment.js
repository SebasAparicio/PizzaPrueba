import React from 'react';
import {TimeService} from '../../../../services/time-service';
import css from './comment.module.css';

export function Comment ({comment}){
    const {date, text, rating} = comment;
    return(
        <div>
            <div className={css.date}>{TimeService.shortDate(date)}</div>
            <div className={css.rating}>Puntuacion {rating}</div>
            <div>{text}</div>
        </div>
    )
}