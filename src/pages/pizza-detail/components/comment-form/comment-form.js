import React from "react";
import { Form, Input, Button, Select } from "../../../../components";

export function CommentForm() {
  const ratings = [
    { value: 10, text: "Fantastica" },
    { value: 5, text: "Buena" },
    { value: 0, text: "Mala" },
  ];
  return (
    <Form>
      <Select options={ratings} />
      <Input placeholder="Añade un comentario" />
      <Button label="Añadir" />
    </Form>
  );
}
