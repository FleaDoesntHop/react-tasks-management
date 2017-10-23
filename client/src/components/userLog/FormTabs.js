import React, {PureComponent} from 'react'
import {Tabs, Tab} from 'react-materialize'

class FormTabs extends PureComponent {
  createTabs () {
    const tabs = this.props.tabs;
    return tabs.map((child, i) => {
      let title = child === 'signIn' ? '登录' : '注册'
      return (
        <Tab
          title={title}
          key={i}
          className='waves-effect waves-light'
        />
      )
    })
  }

  render () {
    return (
      <Tabs
        onChange={(i, e) => this.props.onClick(e.target)}
        className="green-tab"
        z-depth-1
      >
        {this.createTabs()}
      </Tabs>
    )
  }
}

export default FormTabs