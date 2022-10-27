import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedbackChange = feedback  => {
   
    switch (feedback ){
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
          setBad(prevState => prevState + 1);
          break;
          default:
          return;   
    }
   };
  

  const countTotalFeedback = () => {
      return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
    return Math.round((good * 100) / total);
   };
   const feedbacks = ['good', 'neutral', 'bad'];
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onBtnClick={handleFeedbackChange}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  };

