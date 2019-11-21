import React from "react";
import {
  Paper,
  Container,
  Typography as Font,
  Card,
  Grid
} from "@material-ui/core";

export default function habits({ habits }) {
  const habit = habits.map(({ id, name, description }) => (
    <Grid item key={id} lg={6}>
      <Card elevation={3}>
        <Font variant="h4" align="center">
          {name}
        </Font>
        <Font variant="body1">{description}</Font>
      </Card>
    </Grid>
  ));

  return <Container>{habit}</Container>;
}
