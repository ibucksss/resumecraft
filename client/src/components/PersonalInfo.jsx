import React from "react";
import { Form, Input, Row, Col, Divider } from "antd";
import "../styles/info.css";
const { TextArea } = Input;
function PersonalInfo() {
  return (
    <div className="personal-info">
      <Divider orientation="left">Personal Information</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item name="phoneNumber" label="Phone Number">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item name="objective" label="Objective">
            <TextArea />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default PersonalInfo;
