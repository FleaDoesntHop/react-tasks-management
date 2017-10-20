import React, {Component} from 'react'
import Header from './header/header'
import UserLog from './userLog/UserLog'

class App extends Component {
  render () {
    return (
      <div>
        <UserLog />
      </div>
    )
  }
}

export default App