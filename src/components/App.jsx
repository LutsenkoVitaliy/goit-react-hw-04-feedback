import { useState } from 'react';

import Section from "./Section/Section";
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';


export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const countTotalFeedback = () => Object.values(feedback).reduce((accumulator, value) => accumulator + value, 0);

  const countPositiveFeedbackPercentage = () => Math.round((100 * feedback.good) / countTotalFeedback());
  
  const valueIncrementLeaveFeedback = (option) => setFeedback({ ...feedback, [option]: feedback[option] + 1 });

  const { good, neutral, bad } = feedback;

return (
  <>
  <Section title="Please leave feedback">
    <FeedbackOptions 
    options={Object.keys(feedback)} 
    onLeaveFeedback={valueIncrementLeaveFeedback}/>
  </Section>
  <Section title="Statistics">
   {countTotalFeedback() ?
    (<Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      positivePercentage={countPositiveFeedbackPercentage()} />)
    :
    (<Notification message={"There is no feedback"} />)}    
  </Section>
  </>      
    )
}



