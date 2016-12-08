import React, { Component } from 'react'
import releases from '../../lib/releases.js'

export default class NodeRelease extends Component {
  constructor() {
    super()
    this.state = { }
  }

  componentDidMount() {
    releases().then((a) => {
      this.setState(a)
    });
  }

  render() {
    return (
      <div>
        {this.state.averageDay} days in average days year
      </div>
    )
  }
}
