import React, {Component} from 'react'
import Header from './header/header'
import UserLog from './userLog/UserLog'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header />
        <UserLog />
      </div>
    )
  }
}

export default App