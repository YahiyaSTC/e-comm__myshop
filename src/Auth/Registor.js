import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Auth.css";

function Registor() {
  return (
    <div className="auth">
      <Form>
        <Alert>Sign Up</Alert>
        <Form.Group
          className="mb-3 form_group"
          controlId="exampleForm.ControlInputText"
        >
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group
          className="mb-3 form_group"
          controlId="exampleForm.ControlInputEmail"
        >
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group
          className="mb-3 form_group"
          controlId="exampleForm.ControlInputPassword"
        >
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Label className="form_label__forgot d-none">Forgot: <Link to='/'>Email/Password?</Link> </Form.Label>
        <div className="btnn">
          <Button>Sign Up</Button>
        </div>

        <div className="end_text d-none">
          <Form.Label className="form_label__account">
            Don't have an account
          </Form.Label>
          <Link to="/signUp">Sign Up Now</Link>
        </div>
      </Form>
    </div>
  );
}

export default Registor;
