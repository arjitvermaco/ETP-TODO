import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Stack } from "@mui/system";
import { Chip } from "@mui/material";

export default function () {
  const [todos, setTodos] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getTodosFromFirebase();
  }, []);

  const getTodosFromFirebase = async () => {
    console.log("Geting Todos");

    const todoSnapshot = await getDocs(collection(db, "todos"));
    const todoList = todoSnapshot.docs.map((doc) => {
      return doc.data();
    });
    console.log(todoList);
    setTodos(todoList);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>Fetching Todos</p>
      ) : (
        todos.map((todo) => {
          return (
            <Accordion key={todo.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{todo.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{todo.description}</Typography>

                <Stack direction="row" spacing={1}>
                  <Chip label={todo.category} color="primary" />
                  {/* <Chip label="success" color="success" /> */}
                {todo.done? (<Chip label="Done" color="success" />): (<Chip label="Not Done" color="secondary" />)}

                </Stack>

              </AccordionDetails>
            </Accordion>
          );
        })
      )}
    </div>
  );
}
