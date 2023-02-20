import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Divider } from "antd";
import "../styles/info.css";
const { TextArea } = Input;
function Skills() {
  return (
    <div className="skills">
      <Divider orientation="left">Skills</Divider>
      <Row gutter={16}>
        <Form.List name="userSkills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "skill"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing skill",
                        },
                      ]}
                    >
                      <Input placeholder="Skill" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 14 }}>
                    <Form.Item {...restField} name={[name, "skillOverview"]}>
                      <TextArea placeholder="Skill Overview" />
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
    </div>
  );
}

export default Skills;
