import React from "react";
import { Container, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
function FormTextInput(props) {
  const classes = useStyles();
  return (
    <Container className={props.wrapClass}>
      <TextField
        className={classes.field}
        label={props.labelText}
        fullWidth       
        variant="outlined"
        name={props.text}
        id={props.id}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        multiline
        rows={props.rows}
        error={props.error}
       
      />

      {/* <label className={props.labelClass}>{props.labelText}</label>
      <input
        className={props.inputClass}
        type={props.type}
        name={props.text}
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      /> */}
    </Container>
  );
}

export default FormTextInput;
