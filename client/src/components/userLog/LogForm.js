import React, {Component} from 'react'
import Fieldset from './field'
import { Button, Row, Icon } from 'react-materialize'

class LoginForm extends Component {
  constructor(props) {
    super(props)

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
  }

  renderForm () {
    const curTab = this.props.curTab;
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
  }

  render () {
    return (
      <div>
        {this.renderForm()}
        <Row>
          <Button waves='light' className="col s5 form-btn">提交<Icon right>send</Icon></Button>
          <Button waves='light' className="col s5 offset-s2 grey lighten-1 form-btn">取消<Icon right>send</Icon></Button>
        </Row>
      </div>
    )
  }
}

export default LoginForm