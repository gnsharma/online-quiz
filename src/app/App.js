import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

import { Row, Col, Steps } from "antd";
import "antd/dist/antd.css";

import "utils/utils.css";
import "app/App.css";
import QuestionCard from "components/QuestionCard";
import createQuestionsStore from "store";

const { Step } = Steps;

const questionsStore = createQuestionsStore();

function App() {
  const appStore = useLocalStore(() => ({
    currentQuestionId: 1,
    updateCurrentQuestionId(newQuestionId) {
      this.currentQuestionId = newQuestionId;
    },
  }));

  return (
    <div id='app' className='px-10'>
      <Steps current={appStore.currentQuestionId}>
        {[1, 2, 3, 4].map((step) => (
          <Step title={step} />
        ))}
      </Steps>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <QuestionCard
            question={questionsStore.find(
              (question) => question.id == appStore.currentQuestionId
            )}
            updateStep={appStore.currentQuestionId}
            store={questionsStore}
          />
        </Col>
      </Row>
    </div>
  );
}

export default observer(App);
