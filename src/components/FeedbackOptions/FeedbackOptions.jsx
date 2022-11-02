import PropTypes from 'prop-types'
import { ButtonList, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
  <ButtonList>
  {options.map(option => (
    <Button
    key={option}
    type="button"
    onClick={() => onLeaveFeedback(option)}>
    {option}
    </Button>
  ))}
  </ButtonList>
 ) 
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}