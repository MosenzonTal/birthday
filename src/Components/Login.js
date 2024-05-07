import { Button } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "./Login.css";
import Greeting from "./Greeting";

function Login() {
  const ConnectDetils = {
    username: "moshessohn",
    password: "pumhckv",
  };

  const [username, checkUsername] = React.useState("");
  const [password, checkPassword] = React.useState("");
  const [isTrue, setAutentication] = React.useState(false);

  function authentication() {
    return (
      username === ConnectDetils.username && password === ConnectDetils.password
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (authentication() === false) {
      alert("Wrong password, Please try again. ");
    } else {
      alert("That's Right !!! Happy Birthday Baby !!! \nClick OK to continue...");
      setAutentication(true); // Set authentication to true
    }
  }

  return (
    <div align="center" className="centered">
      {!isTrue && ( // Render login form if isTrue is false
        <Paper elevation={24}>
          <form name="Login" onSubmit={handleSubmit}>
            <h3 className="userName">Enter Username</h3>
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
              required
              onChange={(event) => checkUsername(event.target.value)}
            />
            <h3 className="password">Enter Password </h3>
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              onChange={(event) => checkPassword(event.target.value)}
            />
            <div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      )}
      {isTrue && ( // Render Greeting component if isTrue is true
        <h1>
          <Greeting />
        </h1>
      )}
    </div>
  );
}

export default Login;
