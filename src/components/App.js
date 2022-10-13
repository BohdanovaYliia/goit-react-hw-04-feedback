import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleOption = (option) => {
    switch(option) {
      case 'good':
        setGood(g => g + 1);
      break;

      case 'neutral':
        setNeutral(n => n + 1);
        break;
      
      case 'bad':
        setBad(b => b + 1);
      break;

      default:
      return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = good / (good + neutral + bad) * 100;
    return Number.parseInt(positiveFeedbackPercentage);
  }
  
  const totalFeedback = countTotalFeedback();
 
  return (
      <div>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            options={Object.keys(options)}
            handleOption={handleOption}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ?
            <Notification message="There is no feedback"/> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </div>
  );
};
