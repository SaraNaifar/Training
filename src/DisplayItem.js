import React, { Component } from 'react'
import './DisplayItem.css'
class DisplayItem extends Component {
  constructor () {
    super()
    this.state = {bgColor: 'black'}
  }

  markAsDone () {
    this.setState({
      bgColor: 'green'
    })
  }
  markAsPending () {
    this.setState({
      bgColor: 'red'
    })
  }

  render () {
    return (

      <li >

        <span style={{color: this.state.bgColor}}>{this.props.OneItem}</span>
        <button className='delete-btn' onClick={this.props.deleteItem}>Delete</button>
        <button className='done-btn' onClick={this.markAsDone.bind(this)}>Mark as Done</button>
        <button className='pending-btn' onClick={this.markAsPending.bind(this)}>Mark as Pending</button>
      </li>

    )
  }
}
export default DisplayItem
