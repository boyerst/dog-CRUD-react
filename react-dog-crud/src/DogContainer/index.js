
import React from 'react'
import './index.css'
import DogNewForm from '../DogNewForm'

class DogContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      dogs: []
    }
  }

  addDog = () => {
    console.log("addDog() in App.js being called")
    // console.log(dogToAdd)
  }



  render() {
    return (
      <div className="DogContainer">
        <h1>DogContainer</h1>
        <DogNewForm addDog={this.addDog} />
      </div>
    )
  }
}

export default DogContainer