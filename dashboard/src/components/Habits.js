import React from "react";
import { Typography as Font, Card, Grid } from "@material-ui/core";

export default function habits({ habits }) {
  const habit = habits.map(({ id, name, description }) => (
    <Grid item key={id} lg={6}>
      <Card elevation={5} style={style.card}>
        <Font variant="h4" align="center">
          {name}
        </Font>
        <br />
        <Font variant="body1">{description}</Font>
      </Card>
    </Grid>
  ));

  return <>{habit}</>;
}
const style = {
  card: {
    padding: "20px",
    boxShadow: "#361872"
  }
};
