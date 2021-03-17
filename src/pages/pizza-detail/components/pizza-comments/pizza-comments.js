import React from 'react';
import {CommentList} from './commentList.js';

export function PizzaComments({pizza}){
    const {comments} = pizza
    return(
        <section>
            <h2>Añade tu comentario</h2>
            <CommentList comments={comments}/>
        </section>
    );
}