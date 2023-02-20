import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Divider } from "antd";
import "../styles/info.css";
function Education() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div className="education">
      <Divider orientation="left">Education</Divider>
      <Row gutter={16}>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "school"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing school name",
                        },
                      ]}
                    >
                      <Input placeholder="School" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "degree"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing degree/certification",
                        },
                      ]}
                    >
                      <Input placeholder="Degree/Certification" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Form.Item {...restField} name={[name, "gpa"]} rules={[{}]}>
                      <Input placeholder="Grade Point Average" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 4 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "educationYears"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing years",
                        },
                      ]}
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

export default Education;
