import React, { Component } from 'react';
import Section from "./Section/Section";
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, value) => accumulator + value, 0)
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  valueIncrementLeaveFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    
    return (
  <>
  <Section title="Please leave feedback">
    <FeedbackOptions 
    options={Object.keys(this.state)} 
    onLeaveFeedback={this.valueIncrementLeaveFeedback}/>
  </Section>
  <Section title="Statistics">
   {this.countTotalFeedback() ?
    (<Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()} />)
    :
    (<Notification message={"There is no feedback"} />)}    
  </Section>
  </>      
    )}
}

export default App;
