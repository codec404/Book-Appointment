import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/Features/alertSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form Handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `/api/v1/user/register`,
        values
      );
      dispatch(hideLoading());
      if (res?.data?.success) {
        message.success("Registered Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log("Error in react-register");
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
          <h1 className="reg-header">Register Form</h1>
          <Form.Item
            className="item"
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input className="input-field" type="text" required />
          </Form.Item>
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
              Already a user? <Link to="/login">Sign In</Link>
            </p>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
