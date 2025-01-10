import React from "react";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormRow type="text" name="username" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
      </Form>
    </Wrapper>
  );
};

export default login;
