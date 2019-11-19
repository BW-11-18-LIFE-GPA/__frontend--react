import React from "react";
import { Paper, Container, Typography as Font, Card } from "@material-ui/core";

export default function habits({ habits }) {
  const habit = habits.map(({id,name,description}) => (
    <Card key={id}>
      <Font variant="h2">{name}</Font>
      <Font variant="body1">{description}</Font>
    </Card>
  ));
  return (
    <Container>
      {habit}
    </Container>
  );
}
