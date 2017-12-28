import React, { Component } from 'react'
import './App.css'
import DisplayList from './DisplayList'

class App extends Component {
  constructor () {
    super()
    this.state = {text: '', items: ['send mail' ]}
  }

  submitHandler (event) {
    event.preventDefault()
    var text = this.state.text
    var newitem = this.state.items.concat(text)
    this.setState({text: '', items: newitem})
  }

  changeHandler (event) {
    var text = event.target.value
    this.setState({text: text})
  }

  deleteHandler (itemToDelete) {
    let newItems = this.state.items.filter((item) => { return item !== itemToDelete })
    this.setState({
      items: newItems
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>

          <h1 className='App-title'>Welcome to TODO APP </h1>
        </header>

        <h1>TODO</h1>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input onChange={this.changeHandler.bind(this)} value={this.state.text} />
          <button>Add Item</button>
        </form>
        <div>
          <DisplayList items={this.state.items} deleteItem={this.deleteHandler.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
