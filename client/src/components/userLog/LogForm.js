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
      this.initialState[key] = {}
      logForms[key].forEach(value => {
        this.initialState[key][value.propName] = ''
      })
    }

    this.state = JSON.parse(JSON.stringify(this.initialState))

    this.renderForm = this.renderForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  onInputChange (value, propName) {
    this.setState((prevState, props) => {
      let curTab = props.curTab
      let tempObj = prevState[curTab]
      Object.assign(tempObj, {
        [propName]: value
      })
      return {
        [curTab]: tempObj
      }
    })
  }

  submitForm () {
    let curTab = this.props.curTab
    
    userLog(this.state[curTab], curTab)
  }

  clearInput () {
    console.log(this.state)
    this.setState((prevState, props) => {
      let curTab = props.curTab
      console.log(this.initialState[curTab])
      let tempObj = Object.assign({}, this.initialState[curTab])
      return {
        [curTab]: tempObj
      }
    })
    console.log(this.state)
  }

  renderForm () {
    const curTab = this.props.curTab;
    return logForms[curTab].map((field, i) => {
      let state = this.state[curTab]
      return (
        <Fieldset
          label={field.label}
          type={field.type}
          icon={field.icon}
          key={curTab + i}
          value={state[field.propName]}
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