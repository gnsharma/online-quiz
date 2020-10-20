import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

import { Row, Col, Steps, Table } from "antd";
import "antd/dist/antd.css";

import "utils/utils.css";
import "app/App.css";
import QuestionCard from "components/QuestionCard";
import createQuestionsStore from "store";

const { Step } = Steps;

const questionsStore = createQuestionsStore();

const columns = [
  {
    title: "Question",
    dataIndex: "question",
    key: "name",
  },
  {
    title: "Your Answer",
    dataIndex: "selectedAnswer",
    key: "selectedAnswer",
  },
  {
    title: "Correct Answer",
    dataIndex: "correctAnswer",
    key: "correctAnswer",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

function App() {
  const appStore = useLocalStore(() => ({
    totalSteps: 4,
    currentQuestionId: 1,
    updateCurrentQuestionId(newQuestionId) {
      this.currentQuestionId = newQuestionId;
    },
  }));

  return (
    <div id='app' className='px-10'>
      {appStore.currentQuestionId > appStore.totalSteps ? (
        <Table
          dataSource={questionsStore.questions}
          columns={columns}
          pagination={false}
        />
      ) : (
        <>
          <Steps current={appStore.currentQuestionId - 1}>
            {[1, 2, 3, 4].map((step) => (
              <Step title={step} key={step} />
            ))}
          </Steps>

          <QuestionCard
            question={questionsStore.questions.find(
              (question) => question.id == appStore.currentQuestionId
            )}
            appStore={appStore}
            store={questionsStore}
          />
        </>
      )}
    </div>
  );
}

export default observer(App);
