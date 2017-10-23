import React from 'react'
import {Row, Input, Icon} from 'react-materialize'

class Fieldset extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }


  handleInputChange = (proxy, value) => {
    this.props.onInputChange(value, this.props.propName)
  }

  render () {
    const { label, type, icon, inputStyle } = this.props;
    return (
      <Row>
        <Input
          label={label}
          type={type}
          style={inputStyle || {width: '100%'}}
          value={this.props.value}
          onChange={this.handleInputChange}
          checked={!!this.props.value}
        >
          <Icon>{icon}</Icon>
        </Input>
      </Row>
    )
  }
}

export default Fieldset