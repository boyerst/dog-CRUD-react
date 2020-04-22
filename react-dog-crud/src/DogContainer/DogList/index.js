import React from 'react'

function DogList(props) {
  
  console.log("here is props in DogList")


  const dogLis = props.dogs.map((dog, i) => {
    return (
      <li key={i}>
        {dog.name} is a {dog.breed} that is {dog.age} years old.
     
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