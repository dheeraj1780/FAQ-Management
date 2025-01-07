import React from "react";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { Form } from "react-router-dom";

const login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
      </Form>
    </Wrapper>
  );
};

export default login;
