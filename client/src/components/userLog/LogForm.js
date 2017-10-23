import React, {Component} from 'react'
import Fieldset from './field'
import { Button, Row, Icon } from 'react-materialize'
<<<<<<< HEAD
=======
import { logForms } from '../../config'
import {userLog} from '../../utils'
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae

class LoginForm extends Component {
  constructor(props) {
    super(props)

<<<<<<< HEAD
    this.state = {
      signIn: {
        name: '',
        password: '',
        remember: false
      },
      signUp: {
        name: '',
        password: '',
        confirmP: ''
      }
    }
=======
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
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
  }

  renderForm () {
    const curTab = this.props.curTab;
<<<<<<< HEAD
    const {signIn, signUp} = this.state
    if (curTab === 'signIn') {
      return (
        <form>
          <Fieldset
            label="用户名"
            icon="account_box"
            value={signIn.name}
          />
          <Fieldset
            label="密码"
            type="password"
            icon="lock"
            value={signIn.password}
          />
          <Fieldset
            label="记住我"
            type="checkbox"
            value={signIn.remember}
          />
        </form>
      )
    } else {
      return (
        <form>
          <Fieldset
            label="用户名"
            icon="account_box"
            value={signUp.name}
          />
          <Fieldset
            label="密码"
            type="password"
            icon="lock"
            value={signUp.password}
          />
          <Fieldset
            label="确认密码"
            type="password"
            icon="lock"
            value={signUp.confirmP}
          />
        </form>
      )
    }
=======
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
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
  }

  render () {
    return (
      <div>
        {this.renderForm()}
        <Row>
<<<<<<< HEAD
          <Button waves='light' className="col s5 form-btn">提交<Icon right>send</Icon></Button>
          <Button waves='light' className="col s5 offset-s2 grey lighten-1 form-btn">取消<Icon right>send</Icon></Button>
=======
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
>>>>>>> 876f2015b378693a65330e32334d3ffa37a96cae
        </Row>
      </div>
    )
  }
}

export default LoginForm