import React from "react";
import Layout from "../components/Layout";
import T1Image from "../assets/t1.png";
import T2Image from "../assets/t22.png";
import { Row, Col } from "antd";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: T1Image,
      id: 1,
    },
    {
      title: "Modern Horizontal Resume",
      image: T2Image,
      id: 2,
    },
  ];
  return (
    <div className="home">
      <Layout>
        <h1>Choose a Template</h1>
        <p>Click on your username in corner to update information</p>
        <Row gutter={16} className="home-templates">
          {templates.map((template, id) => {
            return (
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <div className="template-display">
                  <img className="template-image" src={template.image} alt="" />
                  <div className="text">
                    <p>{template.title}</p>
                    <button onClick={() => navigate(`/templates/${id + 1}`)}>
                      Try it
                    </button>
                    <p className="warning">
                      Warning! To show templates accurately, mobile devices are
                      not supported when viewing templates. Sorry for the
                      inconvenience.{" "}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Layout>
    </div>
  );
}

export default Home;
