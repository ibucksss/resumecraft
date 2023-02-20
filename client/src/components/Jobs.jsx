import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Divider } from "antd";

import "../styles/info.css";
const { TextArea } = Input;
function Jobs() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div className="jobs">
      <Divider orientation="left">Job Experience</Divider>
      <Row gutter={16}>
        <Form.List name="jobs">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <Col xs={{ span: 24 }} md={{ span: 4 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing company",
                        },
                      ]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 4 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "position"]}
                      rules={[{ required: true, message: "Missing position" }]}
                    >
                      <Input placeholder="Position" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item {...restField} name={[name, "jobOverview"]}>
                      <TextArea placeholder="Overview/Duties" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 4 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "years"]}
                      rules={[{ required: true, message: "Missing years" }]}
                    >
                      <Input placeholder="Years" />
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

export default Jobs;
