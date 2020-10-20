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
        selectedAnswer: "",
        correctAnswer: "Narendra Modi",
      },
      {
        id: 2,
        question: "Who is the President of USA?",
        answers: ["Joe Biden", "Barack Obama", "Donald Trump", "Tulsi Gabbard"],
        status: "new",
        selectedAnswer: "",
        correctAnswer: "Donald Trump",
      },
      {
        id: 3,
        question: "Where did COVID-19 originate?",
        answers: ["China", "USA", "Japan", "India"],
        status: "new",
        selectedAnswer: "",
        correctAnswer: "China",
      },
      {
        id: 4,
        question: "How many IPL Trophies does RCB have?",
        answers: ["12", "6", "4", "0"],
        status: "new",
        selectedAnswer: "",
        correctAnswer: "0",
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
