import React from 'react';

export function Input(props){
    const {classname, label, ...rest} = props;
   return(<div className={classname}>
        <input {...rest}/>
        <label><span>{label}</span></label>
    </div>);
}