import React from 'react'
import {Row, Input, Icon} from 'react-materialize'

const Fieldset = ({label, type, icon, styleObj}) => {


  return (
    <Row>
      <Input
        label={label}
        type={type}
      >
        <Icon>{icon}</Icon>
      </Input>
    </Row>
  )
}

export default Fieldset