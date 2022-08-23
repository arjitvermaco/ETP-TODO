import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

export default function NewTodo() {
  const [age, setAge] = React.useState("Test");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
