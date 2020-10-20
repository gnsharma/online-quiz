import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

const Timer = ({ appStore, questionsStore, questionId }) => {
  const [secondsLeft, setSecondsLeft] = useState(20);

  useEffect(() => {
    let isTimedOut = false;
    const timeoutId = setTimeout(() => {
      isTimedOut = true;
      appStore.updateCurrentQuestionId(questionId + 1);
    }, 20000);
    return () => {
      setSecondsLeft(20);
      clearTimeout(timeoutId);
      if (isTimedOut) {
        questionsStore.updateQuestionProperty(questionId, "status", "skipped");
      }
    };
  }, [questionId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>Time left</p>
      <p>{secondsLeft}</p>
    </>
  );
};

export default observer(Timer);
