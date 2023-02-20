import React, { useState } from "react";
import Layout from "../components/Layout";
import { Tabs, Form, Button, Spin, message } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import axios from "axios";
function Profile() {
  const user = JSON.parse(localStorage.getItem("ResumeCraft-user"));
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("ResumeCraft-user", JSON.stringify(result.data));
      setLoading(false);
      message.success("Updated Succesfully!");
    } catch (error) {
      setLoading(false);
      message.error("Update Failed");
    }
  };
  const items = [
    {
      key: "1",
      label: `Personal Information`,
      children: <PersonalInfo />,
    },
    {
      key: "2",
      label: `Education`,
      children: <Education />,
    },
    {
      key: "3",
      label: `Skills`,
      children: <Skills />,
    },
    {
      key: "4",
      label: `Job Experience`,
      children: <Jobs />,
    },
    {
      key: "5",
      label: `Projects`,
      children: <Projects />,
    },
  ];
  return (
    <div className="profile">
      <Layout className="layout">
        <div className="update-info">
          <h1>Update Your Profile</h1>

          <Form className="form" onFinish={onFinish} initialValues={user}>
            {loading && <Spin size="large" />}
            <Tabs defaultActiveKey="1" items={items} />
            <Button htmlType="submit">Update</Button>
          </Form>
        </div>
      </Layout>
    </div>
  );
}

export default Profile;
