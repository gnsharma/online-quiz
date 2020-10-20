import React, { useRef } from "react";
import { observer } from "mobx-react-lite";

import { Card, Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const QuestionCard = ({ question, store, updateStep }) => {
  const questionId = question.id;
  return (
    <Card
      className='mt-10'
      title={question.question}
      actions={[
        <Button
          onClick={() => {
            updateStep(questionId + 1);
            store.updateQuestionProperty(questionId, "status", "correct");
          }}
        >
          Submit Answer
        </Button>,
        <Button
          onClick={() => {
            updateStep(questionId + 1);
            store.updateQuestionProperty(questionId, "status", "skipped");
          }}
        >
          Skip Quesion
        </Button>,
      ]}
    >
      {question.answers.map((answer) => (
        <p>{answer}</p>
      ))}
    </Card>
  );
};

export default observer(QuestionCard);
