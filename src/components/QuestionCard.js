import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Card, Button, Radio } from "antd";

import Timer from "./Timer";

const QuestionCard = ({ question, store, appStore }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questionId = question.id;
  const correctAnswer = question.correctAnswer;

  const handleSubmitClick = () => {
    appStore.updateCurrentQuestionId(questionId + 1);
    const status = correctAnswer == selectedAnswer ? "correct" : "wrong";
    store.updateQuestionProperty(questionId, "status", status);
    store.updateQuestionProperty(questionId, "selectedAnswer", selectedAnswer);
  };

  const handleSkipClick = () => {
    appStore.updateCurrentQuestionId(questionId + 1);
    store.updateQuestionProperty(questionId, "status", "skipped");
    store.updateQuestionProperty(questionId, "selectedAnswer", "");
  };

  useEffect(() => {
    setSelectedAnswer("");
  }, [question]);

  return (
    <Card
      className='mt-10'
      title={question.question}
      actions={[
        <Button onClick={handleSubmitClick} disabled={selectedAnswer === ""}>
          Submit Answer
        </Button>,
        <Button onClick={handleSkipClick}>Skip Quesion</Button>,
      ]}
      extra={
        <Timer
          appStore={appStore}
          questionId={questionId}
          questionsStore={store}
        />
      }
    >
      <Radio.Group
        onChange={(event) => setSelectedAnswer(event.target.value)}
        value={selectedAnswer}
      >
        {question.answers.map((answer) => (
          <Radio key={answer} value={answer}>
            {answer}
          </Radio>
        ))}
      </Radio.Group>
    </Card>
  );
};

export default observer(QuestionCard);
