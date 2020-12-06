import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import NotificationMessage from './components/NotificationMessage/NotificationMessage';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import './App.css';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  totalQuantityOfFeedbacks = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  percentageOfGoodFeedbacks = () => {
    const total = this.totalQuantityOfFeedbacks();
    const { good } = this.state;
    const percentageOfGood = total ? Math.round((good / total) * 100) : 0;
    return percentageOfGood;
  };

  onFeedbackIncrease = ({ target }) => {
    const type = target.dataset.action;
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };
   
  render() {

    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral','bad'];
    const totalFedbacks = this.totalQuantityOfFeedbacks();
    const goodFeedbacks = this.percentageOfGoodFeedbacks();


    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onFeedback={this.onFeedbackIncrease}>
          </FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
          {good || neutral || bad ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFedbacks} percentageOfGoodFeedbacks={goodFeedbacks}/>): (<NotificationMessage message='There is no one feedback yet'/>)
          }
        </Section>
      </>
    );
  }
}


export default App;
