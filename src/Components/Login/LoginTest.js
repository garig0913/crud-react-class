import { useState } from "react";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import Card from "../Card";
import Component from '../Component'
import swal from "sweetalert";


const LoginTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password,
    }

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("could not find user");
        }
        return response.json();
      })
      .then((result) => swal(result.message, "user registered", "success"))
      .catch((err) => {
        swal("error", err.message, "error");
      });
  }

  return (
    <Component>
      <Card>
        <Form
          submitHandler={submitHandler}
        >
          <Label lab="Email" htmlFor="email" />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
            value={email}
          />

          <Label lab="Password" htmlFor="password" />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
            type="password"
            value={password}
          />
          <Button
            val='Login'
            type="normal"
            bg="green"
          />
        </Form>
      </Card>
    </Component>


  );
};

export default LoginTest
