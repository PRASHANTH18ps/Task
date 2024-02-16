import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  DownOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Paragraph, Title } = Typography;

function ActionCard() {
  const [ellipsis, setEllipsis] = useState(false);

  return (
    <Card size="small">
      <Row gutter={[16, 16]}>
        <Col>
          <Card size="small">
            <Row>
              <Col>
                <MenuFoldOutlined />
              </Col>
              <Col>
                <_Title level={5}>
                  What are the primary components of variable and semi-variable
                  cost impacting gross margins?
                </_Title>
                {ellipsis && (
                  <>
                    <Paragraph>
                      Add raw meterials cost as variable costsdfgs What are the
                      pri
                    </Paragraph>
                    <Button type="primary" icon={<CheckCircleFilled />}>
                      ACCEPT
                    </Button>
                    <Button type="text" icon={<CloseCircleFilled />}>
                      DISMISS
                    </Button>
                  </>
                )}
              </Col>
              <Col
                onClick={(e) => {
                  e.stopPropagation();
                  setEllipsis(!ellipsis);
                }}
              >
                <DownOutlined />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card size="small">add details</Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ActionCard;
const _Title = styled(Title)`
  margin: 0;
`;
