import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/Features/alertSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form Handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(`/api/v1/user/login`, values);
      dispatch(hideLoading());
      if (res?.data?.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Successfully logged in!!!");
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log("Error in react-login");
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="form-body"
        >
          <h1 className="reg-header">Login Form</h1>
          <Form.Item
            className="item"
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input className="input-field" type="email" required />
          </Form.Item>
          <Form.Item
            className="item"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="navigate-button">
            <p>
              New User? <Link to="/register">Sign Up</Link>
            </p>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
