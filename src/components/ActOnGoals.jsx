import { Button, Card, Col, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Paragraph, Title } = Typography;
function ActOnGoals() {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
      }}
    >
      <Card title="STEP" extra="4 Prompts | 5 mins">
        <Row>
          <Col span={18}>
            <_Title level={2}>Cost Identification</_Title>
          </Col>
          <Col span={6}>
            <Button>
              <Link to={"/qna"}>Get Started</Link>
            </Button>
          </Col>
        </Row>
        <Paragraph>
          Identify and categorized the various costs influencing margins
        </Paragraph>
      </Card>
    </Space>
  );
}

export default ActOnGoals;
const _Title = styled(Title)`
  margin: 0;
`;
