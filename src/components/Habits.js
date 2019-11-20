import React from "react";
import { Paper, Container, Typography as Font, Card, Grid } from "@material-ui/core";

export default function habits({ habits }) {
  const habit = habits.map(({id,name,description}) => (
    <Grid item>
      <Card key={id} elevation={3}>
        <Font variant="h2">{name}</Font>
        <Font variant="body1">{description}</Font>
      </Card>
    </Grid>
  ));
  
  return (
    <Container>
      {habit}
    </Container>
  );
}
