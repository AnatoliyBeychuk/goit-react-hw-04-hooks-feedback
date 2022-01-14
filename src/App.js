import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const countTotalFeedback = (state) => {
    return Object.values(state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  const countPositiveFeedbackPercentage = (state) => {
    const { good } = state;
    const total = countTotalFeedback(state);
    if (good > 0) return Math.round((good / total) * 100);
    return 0;
  };

  const getOptions = (state) => {
    return Object.keys(state);
  };

  const onLeaveFeedback = (event) => {
    const { name } = event.currentTarget;
    if (name === "good") setGood((good) => good + 1);
    if (name === "neutral") setNeutral((neutral) => neutral + 1);
    if (name === "bad") setBad((bad) => bad + 1);
  };

  const total = countTotalFeedback(state);
  const positivePercent = countPositiveFeedbackPercentage(state);
  const options = getOptions(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
