import React, {Component} from 'react'
import LoginForm from './LogForm'
import FormTabs from './FormTabs'

class UserLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curTab: 'signIn',
      tabs: ['signIn', 'signUp']
    }
  }

  changeTab = child => {
    switch(child.innerText) {
      case '登录':
        return this.setState({curTab: 'signIn'})
      case '注册':
        return this.setState({curTab: 'signUp'})
    }
  }

  render () {
    const {curTab, tabs} = this.state
    return (
      <div className="row log-form-row">
        <div className="col s8 offset-s2 log-form">
          <FormTabs
            tabs={tabs}
            onClick={this.changeTab}
          />
          <LoginForm curTab={curTab}/>
        </div>
      </div>
    )
  }
}

export default UserLog