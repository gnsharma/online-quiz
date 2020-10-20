import { observable } from "mobx";

function createQuestionsStore() {
  return observable({
    questions: [
      {
        id: 1,
        question: "Who is the Prime Minister of India?",
        answers: [
          "Rahul Gandhi",
          "Narendra Modi",
          "Manmohan Singh",
          "Sonia Gandhi",
        ],
        status: "new",
      },
      {
        id: 2,
        question: "Who is the President of USA?",
        answers: ["Joe Biden", "Barack Obama", "Donald Trump", "Tulsi Gabbard"],
        status: "new",
      },
      {
        id: 3,
        question: "Where did COVID-19 originate?",
        answers: ["China", "USA", "Japan", "India"],
        status: "new",
      },
      {
        id: 4,
        question: "How many IPL Trophies does RCB have?",
        answers: ["12", "6", "4", "0"],
        status: "new",
      },
    ],
    updateQuestionProperty(questionId, propertyName, newPropertyValue) {
      this.questions.find((question) => question.id === questionId)[
        propertyName
      ] = newPropertyValue;
    },
  });
}

export default createQuestionsStore;
