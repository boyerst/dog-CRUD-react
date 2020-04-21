import React from 'react'


class DogNewForm extends React.Component {

  constructor() {
    super()
    this.state = {
      breed: '',
      name: '',
      age: ''
    }
  }

  render() {
    console.log(this.props)
    console.log("this.props in DogNewForm")
    return (
    
      <div>
        <h3>Enter New Dog Info</h3>
          <div>
            <input
              type="text"
              name="Breed"
              placeholder="Enter Breed"
              value={this.state.breed}
              onChange={this.handleChange}
            />
          </div>
                <div>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
                <div>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Enter New Dog</button>
          </div>
      </div>
    )
  }
}

export default DogNewForm