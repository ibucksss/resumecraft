import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/entry.css";
function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
      message.success("Registered Succesfully!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Registration Failed");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("ResumeCraft-user")) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="register">
      <div className="register-left">
        <div className="lottie">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_wWZd8QJ7Cj.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="register-right">
        {loading && <Spin size="large" />}
        <Form
          className="register-form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <h1>Register</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="cpassword"
            rules={[{ required: true, message: "Passwords do not match!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="d-flex ">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <span>or</span>
            <Link to={"/login"}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
