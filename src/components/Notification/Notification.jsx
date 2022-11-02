import PropTypes from 'prop-types'

import { Condition } from './Notification.styled'

export default function Notification({message}) {
  return (
    <Condition>{message}</Condition>
  )
};

Notification.protoType = {
  message: PropTypes.string.isRequired,
}