import React from 'react';
import {Comment} from './comment.js';
import css from './commentList.module.css';
export function CommentList({ comments }) {
    return (
      <section>
        <ul>
          {comments.map((comment) => {
            return (
              <li className={css.comment} key={comment.id}>
                 <Comment comment = {comment}/>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }