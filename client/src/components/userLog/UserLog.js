import React, {Component} from 'react'
import Fieldset from './field'

class UserLog extends Component {

  render () {
    return (
      <form>
        <Fieldset
          label="用户名"
          icon="account_box"
          styleObj={{margin: '0 auto'}}
        />
        <Fieldset
          label="密码"
          type="password"
          icon="lock"
          style="margin: '0 auto'"
        />
      </form>
    )
  }
}

export default UserLog