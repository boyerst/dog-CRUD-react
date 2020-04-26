import React from 'react'

function DogEditForm(props) {
  return (

  <div>
    <h3>Edit Dog</h3>
    <form onSubmit={props.updateDog}>
      <div>
        <input
          type="text"
          name="breed"
          placeholder="Enter updated breed"
          value={props.dogCurrentlyBeingEdited.breed}
          onChange={props.handleDogToEdit}
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter updated name"
          value={props.dogCurrentlyBeingEdited.name}
          onChange={props.handleDogToEdit}
        />
      </div>
      <div>
        <input
          type="text"
          name="age"
          placeholder="Enter updated age"
          value={props.dogCurrentlyBeingEdited.age}
          onChange={props.handleDogToEdit}
        />
      </div>
      <div>
        <button>Update Dog</button>
      </div>
    </form>
  </div>
  )
}


export default DogEditForm