
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
      dogBeingEdited: null
    }
  }

  addDog = (dogToAdd) => {
    console.log(dogToAdd)
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
    console.log("you are trying to edit a dog", indexOfDogToEdit)
    const dog = this.state.dogs[indexOfDogToEdit]
    this.setState({
      indexOfDogToEdit: indexOfDogToEdit,
      dogBeingEdited: {
        breed: dog.breed, 
        name: dog.name, 
        age: dog.age
      }
    })
  }

  handleDogToEdit = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)

    const dogBeingEdited = this.state.dogBeingEdited
    dogBeingEdited[event.target.name] = event.target.value
    this.setState({
      dogBeingEdited: dogBeingEdited
    })
  }

  updateDog = (event) => {
    event.preventDefault()
    const dogs = this.state.dogs
    console.log("dog edit route hitting")
    dogs[this.state.indexOfDogToEdit] = this.state.dogBeingEdited
    this.setState({
      dogs: dogs, 
      indexOfDogToEdit: -1, 
      dogBeingEdited: null
    })
  }

  render() {
    console.log(this.state)
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
            dogBeingEdited={this.state.dogBeingEdited}
            handleDogToEdit={this.handleDogToEdit}
            updateDog={this.updateDog}
            

           />
        }
      </div>
    )
  }
}

export default DogContainer