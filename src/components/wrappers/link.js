import React from 'react';
import css from './link.module.css';

export function Link({href,text}){
    return(
        <a className={css.link} href={href}>{text}</a>
    )
}
