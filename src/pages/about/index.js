import React from 'react';
import {Page} from '../../components'
import css from './index.module.css';

export default function About({foo}){
    return <Page><h1 className={css.about}>About {foo}</h1></Page>;
}

