import React from 'react'
import {Row, Input, Icon} from 'react-materialize'

class Fieldset extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (i, e) => {
    this.setState({value: e})
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
        >
          <Icon>{icon}</Icon>
        </Input>
      </Row>
    )
  }
}

export default Fieldset