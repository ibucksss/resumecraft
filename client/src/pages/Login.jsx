import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/entry.css";
import axios from "axios";
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("api/user/login", values);
      setLoading(false);
      message.success("Login Succesful!");
      localStorage.setItem("ResumeCraft-user", JSON.stringify(user.data));
      navigate("/home");
    } catch (error) {
      setLoading(false);
      message.error("Login Failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("ResumeCraft-user")) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="login">
      <div className="login-left">
        {loading && <Spin size="large" />}
        <Form
          className="login-form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1 className="login-text">Login</h1>
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
          <div className="d-flex">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <span>or</span>
            <Link to={"/register"}>Register Now</Link>
          </div>
        </Form>
      </div>
      <div className="login-right">
        <div className="lottie">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_4DLPlW.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Login;
