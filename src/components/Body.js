import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Body() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <NewTodo/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TodoList/>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
