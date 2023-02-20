import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Divider } from "antd";

import "../styles/info.css";
const { TextArea } = Input;
function Projects() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div className="projects">
      <Divider orientation="left">Projects</Divider>
      <Row gutter={16}>
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "projectName"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing project name",
                        },
                      ]}
                    >
                      <Input placeholder="Project Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item {...restField} name={[name, "projectOverview"]}>
                      <TextArea placeholder="Project Overview" />
                    </Form.Item>
                  </Col>

                  <Col xs={{ span: 24 }} md={{ span: 4 }}>
                    <Form.Item {...restField} name={[name, "projectDates"]}>
                      <Input placeholder="Date Completed" />
                    </Form.Item>
                  </Col>

                  <Col xs={{ span: 24 }} md={{ span: 2 }}>
                    <MinusCircleOutlined
                      className="icon"
                      onClick={() => remove(name)}
                    />
                  </Col>
                </>
              ))}

              <Form.Item>
                <Button
                  className="add-field"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </div>
  );
}

export default Projects;
