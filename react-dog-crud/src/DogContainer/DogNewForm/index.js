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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addDog(this.state)
    this.setState({
      breed: '',
      name: '',
      age: ''
    })

  }

  render() {
    return (
    
      <div>
        <h3>Enter New Dog Info</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="breed"
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
          </form>
      </div>
    )
  }
}

export default DogNewForm