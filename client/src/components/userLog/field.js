import React from 'react'
import {Row, Input, Icon} from 'react-materialize'

const Fieldset = ({label, type, icon, inputStyle}) => {


  return (
    <Row>
      <div>
        <Input
          label={label}
          type={type}
          style={inputStyle || {width: '100%'}}
        >
          <Icon>{icon}</Icon>
        </Input>
      </div>
    </Row>
  )
}

export default Fieldset