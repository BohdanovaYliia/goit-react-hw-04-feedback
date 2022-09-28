import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleOption = (option) => {
    this.setState((prevState) => {
      
      return {
        [option]: prevState[option] + 1,
      }
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedbackPercentage = good / (good + neutral + bad) * 100;
    return Number.parseInt(positiveFeedbackPercentage);
  }
  

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
 
    return (
      <div>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleOption={this.handleOption}
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
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </div>
    );
}
};
