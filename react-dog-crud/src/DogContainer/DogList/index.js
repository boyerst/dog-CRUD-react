import React from 'react'

function DogList(props) {
  
  const dogLis = props.dogs.map((dog, i) => {
    return (
      <li key={i}>
        {dog.name} is a {dog.breed} that is {dog.age} years old.
        <button onClick={ () => props.deleteDog(i) }>
          Delete
        </button>
        <button onClick={ () => props.editDog(i) }>
          Edit
        </button>
      </li>
    )
  })

  return (
    <div>
      <h3>Dog List</h3>
        <ul>
          {dogLis}
        </ul>
      </div>
  )
}

export default DogList