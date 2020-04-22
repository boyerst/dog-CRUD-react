
import React from 'react'
import './index.css'
import DogNewForm from './DogNewForm'
import DogList from './DogList'

class DogContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      dogs: []
    }
  }

  addDog = (dogToAdd) => {
    console.log("addDog() in App.js being called")
    console.log(dogToAdd)
    const dogs = this.state.dogs
    dogs.push(dogToAdd)
    this.setState({dogs: dogs})
  }



  render() {
    console.log("this.state in render() dogContainer")
    console.log(this.state)
    return (
      <div className="DogContainer">
        <h1>DogContainer</h1>
        <DogNewForm addDog={this.addDog} />
        <DogList />
      </div>
    )
  }
}

export default DogContainer