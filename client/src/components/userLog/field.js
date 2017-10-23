import React from 'react'
import {Row, Input, Icon} from 'react-materialize'

class Fieldset extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

<<<<<<< HEAD
  handleInputChange = (i, e) => {
    this.setState({value: e})
=======
  handleInputChange = (proxy, value) => {
    this.props.onInputChange(value, this.props.propName)
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
  }

  render () {
    const { label, type, icon, inputStyle } = this.props;
<<<<<<< HEAD
=======

>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
    return (
      <Row>
        <Input
          label={label}
          type={type}
          style={inputStyle || {width: '100%'}}
<<<<<<< HEAD
          value={this.props.value}
=======
          defaultValue={this.props.value}
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
          onChange={this.handleInputChange}
        >
          <Icon>{icon}</Icon>
        </Input>
      </Row>
    )
  }
}

export default Fieldset