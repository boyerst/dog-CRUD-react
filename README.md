![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# React Dog CRUD 

## Setup

Create a brand new react app.  Delete the junk that comes along with it.

## Components

* Create a component called `DogContainer`.  

* It will have a `dogs` array in state. A `Dog` is an object with name (string), age (number), and breed (string).

* Render `DogContainer` in `App`

## Create

* Create a `DogNewForm` class component that lets users enter dog info. Verify that the inputs are controlled by logging state in `render()`.  Test it, and when you know it works, commit.
  > Don't try to log state immediately after running `setState()` -- log it in the `render()` function.  Always.

* Make a `handleSubmit` function in `DogNewForm` that just logs `"handleSubmit in DogNewForm called"` and have it called when the form is submitted.  You should see that log in the console--don't forget to `preventDefault()`.  When it works, commit. 

* In `DogContainer`, make a function `addDog()` that just logs "addDog" and pass it through props to `DogNewForm`. Make it so that clicking submit on dog form causes "addDog" to log. How can you do this?
  <details>
    <summary>Click for hint</summary>
    >call the `addDog` function in `handleSubmit` -- hint -- it's in props!
  </details>
  When it works, commit.  

* Make `addDog` actually add a dog to the array in state. Check that it's getting added in state. **Remember: NEVER DIRECTLY MUTATE STATE.** How can you do this?
  <details>
    <summary>Click for hint</summary>
    >`render()` always runs right after `setState` has finished updating state, so log state in render() in DogContainer.  Remember: don't try to log on the next line right after this.setState() -- your state update might not have happened yet. 
  </details>
 When it works, commit. 

## Read

* Create a `DogList` (functional component) that renders inside of `DogContainer`.  Once you have it showing up, pass the dogs to it from state and make it render the list of dogs in some kind of nice way.  When it works, commit.

## Delete

* Create a Delete button next to each dog in your list. Make it so that it logs the array index of the dog whose delete button the user clicking by calling a method passed down through props and attached to the button, like we did in class.  You don't necessarily need forms here, but there are a couple of different patterns for getting that index number into the delete method.  See the notes from class.  Commit when you see the index in the console.

* Make your `deleteDog` function actually remove the dog from state (without directly mutating state, of course). Commit when it works. 

## Update

* Add an Edit button next to each dog in your list. Make it so that it logs the array index of the dog whose edit button the user is clicking by calling a method (`editDog`) passed down through props and attached to the button, like we did in class.  Commit when you see the index in the console.

* Have a value in state of `DogContainer` called `indexOfDogToEdit` initialized to -1.  Later, this will represent a dog currently being edited, and be used to conditionally hide and show an edit form, but for now just have your editDog button set the value of `this.state.indexOfDogToEdit` using setState.  Test by logging and/or using React Dev tools, and commit when it works.

* Create a `DogEditForm` component that renders in `DogContainer` when the value of `this.state.indexOfDogToEdit` is something other than `-1`. Commit when you have it so that clicking any edit button makes the form show.

* Have another property in state called `dogCurrentlyBeingEdited` initialized to `null`.  Make `editDog` also copy the properties of the dog currently being edited into a new object stored there in state, like we did in class.  Test by logging and/or using React Dev tools, and commit when it works.

* Pass those values down into `DogEditForm` via props so they actually show up in the form. Commit when it works.  

* Write a `handleEditChange` function in `DogContainer` that will be passed to `DogEditForm` through props and added as an onChange handler to the inputs in the edit form. That function should update the appropriate property in `dogCurrentlyBeingEdited`, which should mean that the user can type into the edit form.  Commit when youhave verified that the values in state are actually being updated when the user types.

* Create a function `updateDog` in `DogContainer`.  Commit after each of the following:
  * `updateDog` passed into `DogEditForm` via props and logs "updateDog" when update is clicked
  * `updateDog` actually updates the appropriate dog in state (should be reflected on the screen)
  * `updateDog` closes the editModal
  * `updateDog` resets other edit-related state properties to their initial values




