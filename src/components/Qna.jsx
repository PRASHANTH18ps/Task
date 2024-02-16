import React, { useState } from "react";
import ActOnGoals from "./ActOnGoals";
import { Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  ArrowsAltOutlined,
  BorderlessTableOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  DoubleRightOutlined,
  DownOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  PushpinFilled,
} from "@ant-design/icons";
import styled from "styled-components";
import ActionCard from "./ActionCard";
const { Paragraph, Title } = Typography;
function Qna() {
  const [isInnerTagVisible, setIsInnerTagVisible] = useState(false);
  const [isInnerCardOpen, setIsInnerCardOpen] = useState(false);

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
      }}
    >
      <Card title="Question 1 out of 3">
        <_Title level={4}>
          What are the primary components of variable and semi-variable cost
          impacting gross margins?
        </_Title>

        <Tag
          icon={<DoubleRightOutlined />}
          color="processing"
          onClick={(e) => {
            e.stopPropagation();
            setIsInnerTagVisible(!isInnerTagVisible);
          }}
        >
          Need clarification on the question?
          <>
            <PlusCircleOutlined />
          </>
          {isInnerTagVisible && (
            <Card size="small">
              <Space size={[0, 8]} wrap>
                <Tag
                  icon={<PushpinFilled />}
                  bordered={false}
                  color="volcano"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsInnerCardOpen(!isInnerCardOpen);
                  }}
                >
                  Need clarification on the question?
                  <ArrowsAltOutlined />
                  {isInnerCardOpen && <ActionCard />}
                </Tag>
                <Tag icon={<PushpinFilled />} bordered={false} color="volcano">
                  Can I skip this?
                  <ArrowsAltOutlined />
                </Tag>
                <Tag icon={<PushpinFilled />} bordered={false} color="volcano">
                  Why is this important?
                  <ArrowsAltOutlined />
                </Tag>
                <Tag icon={<PushpinFilled />} bordered={false} color="volcano">
                  Simplify the question
                  <ArrowsAltOutlined />
                </Tag>
              </Space>
            </Card>
          )}
        </Tag>
      </Card>
    </Space>
  );
}

export default Qna;
const _Title = styled(Title)`
  margin: 0;
`;
