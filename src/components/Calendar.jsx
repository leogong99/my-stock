import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

function Calendar({onChange}) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue={"2020-10-13"}
        onChange={(event)=>{onChange(event.currentTarget.value)}}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default Calendar;