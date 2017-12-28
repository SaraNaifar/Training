import React, { Component } from 'react'
import DisplayItem from './DisplayItem'

class DisplayList extends Component {
  render () {
    return (

      <div>

        <ul>
          {this.props.items.map((item, i) => {
            return (
              <DisplayItem OneItem={item} deleteItem={this.props.deleteItem.bind(null, item)} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayList
