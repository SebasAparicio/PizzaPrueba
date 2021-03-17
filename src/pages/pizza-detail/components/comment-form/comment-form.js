import React from 'react';
import {Form, Input, Button} from '../../../../components';

export function CommentForm(){
    return(
        <Form>
            <Input placeholder="Añade un comentario"/>
            <Button label="Añadir"/>
        </Form>
    )
}
