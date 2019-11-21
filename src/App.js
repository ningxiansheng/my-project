import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>请发表对React flux的评论</h1>
          <Left/>
          <Right/>
      </div>
    )
  }
}
