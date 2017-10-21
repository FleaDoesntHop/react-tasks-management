import React, {Component} from 'react'
import Fieldset from './field'

class LoginForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderForm () {
    const curTab = this.props.curTab;
    if (curTab === 'signIn') {
      return (
        <form>
          <Fieldset
            label="用户名"
            icon="account_box"
          />
          <Fieldset
            label="密码"
            type="password"
            icon="lock"
          />
        </form>
      )
    } else {
      return (
        <form>
          <Fieldset
            label="用户名"
            icon="account_box"
          />
          <Fieldset
            label="密码"
            type="password"
            icon="lock"
          />
          <Fieldset
            label="确认密码"
            type="password"
            icon="lock"
          />
        </form>
      )
    }
  }

  render () {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

export default LoginForm