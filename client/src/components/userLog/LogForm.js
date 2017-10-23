import React, {Component} from 'react'
import Fieldset from './field'
import { Button, Row, Icon } from 'react-materialize'
import { logForms } from '../../config'
import {userLog} from '../../utils'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {}
    for (let key in logForms) {
      logForms[key].forEach(value => {
        this.initialState[value.propName] = ''
      })
    }

    this.state = Object.assign({}, this.initialState)

    this.renderForm = this.renderForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  onInputChange (value, propName) {
    this.setState({[propName]: value})
  }

  submitForm () {
    let curTab = this.props.curTab
    
    userLog(this.state[curTab], curTab)
  }

  clearInput () {
    let curTab = this.props.curTab
    let tempObj = {}

    logForms[curTab].forEach(value => tempObj[value.propName] = '')
    this.setState(tempObj)


  }

  renderForm () {
    const curTab = this.props.curTab;

    return logForms[curTab].map((field, i) => {
      return (
        <Fieldset
          label={field.label}
          type={field.type}
          icon={field.icon}
          key={curTab + i}
          value={this.state[field.propName]}
          propName={field.propName}
          onInputChange={this.onInputChange}
        />
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderForm()}
        <Row>
          <Button 
            waves='light' 
            className="col s5 form-btn"
            onClick={this.submitForm}
          >
            提交
            <Icon right>send</Icon>
          </Button>
          <Button 
            waves='light' 
            className="col s5 offset-s2 grey lighten-1 form-btn"
            onClick={this.clearInput}
          >
            清空
            <Icon right>send</Icon>
          </Button>
        </Row>
      </div>
    )
  }
}

export default LoginForm