import React from "react";
import "../styles/layout.css";
import { Dropdown, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
function Layout(props) {
  const user = JSON.parse(localStorage.getItem("ResumeCraft-user"));
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <Link to={"/home"}>Home</Link>,
    },
    {
      key: "2",
      label: <Link to={"/profile"}>Profile</Link>,
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("ResumeCraft-user");
            navigate("/login");
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")}>ResumeCraft</h1>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;
