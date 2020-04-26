
import React from 'react'
import './index.css'
import DogNewForm from './DogNewForm'
import DogList from './DogList'
import DogEditForm from './DogEditForm'

class DogContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      dogs: [{
        breed: 'Black Lab',
        name: "Phil",
        age: 2
      }, {
        breed: 'Poodle',
        name: 'Randy',
        age: 45
      }], 
      indexOfDogToEdit: -1,
      dogCurrentlyBeingEdited: null
    }
  }

  addDog = (dogToAdd) => {
    const dogs = this.state.dogs
    dogs.push(dogToAdd)
    this.setState({dogs: dogs})
  }

  deleteDog = (indexOfDogToDelete) => {
    const dogs = this.state.dogs
    dogs.splice(indexOfDogToDelete, 1)
    this.setState({
      dogs: dogs
    })
  }

  editDog = (indexOfDogToEdit) => {
    const dog = this.state.dogs[indexOfDogToEdit]
    this.setState({
      indexOfDogToEdit: indexOfDogToEdit,
      dogCurrentlyBeingEdited: {
        breed: dog.breed, 
        name: dog.name, 
        age: dog.age
      }
    })
  }

  handleDogToEdit = (event) => {
    const dogCurrentlyBeingEdited = this.state.dogCurrentlyBeingEdited
    dogCurrentlyBeingEdited[event.target.name] = event.target.value
    this.setState({
      dogCurrentlyBeingEdited: dogCurrentlyBeingEdited
    })
  }

  updateDog = (event) => {
    event.preventDefault()
    const dogs = this.state.dogs
    dogs[this.state.indexOfDogToEdit] = this.state.dogCurrentlyBeingEdited
    this.setState({
      dogs: dogs, 
      indexOfDogToEdit: -1, 
      dogCurrentlyBeingEdited: null
    })
  }

  render() {
    return (
      <div className="DogContainer">
        <h1>DogContainer</h1>
        <DogNewForm addDog={this.addDog} />
        <DogList 
          dogs={this.state.dogs}
          deleteDog={this.deleteDog}
          editDog={this.editDog}
        />
        {
          this.state.indexOfDogToEdit !== -1
          &&
          <DogEditForm
            dogCurrentlyBeingEdited={this.state.dogCurrentlyBeingEdited}
            handleDogToEdit={this.handleDogToEdit}
            updateDog={this.updateDog}
           />
        }
      </div>
    )
  }
}

export default DogContainer