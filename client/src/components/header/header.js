import React, {Component} from 'react'

class Header extends Component {
  render () {
    return (
      <div className="row blue-grey darken-3 z-depth-2" style={{height: '50px'}}>
        <h1
          className="white-text app-header"
        >儿童习惯管理</h1>
      </div>
    )
  }
}

export default Header