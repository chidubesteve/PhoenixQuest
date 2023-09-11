import React, { useState } from "react"


const UpdateNestedObjects = () => {
    const [bugs, setBugs] = useState([
        {id:1, title: "bug-1", fixed: false},
        {id:2, title: "bug-2", fixed: false}

    ])

    const handleClick = () => {
        setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed:true } : bug))
    }
  return (
    <div onClick={handleClick}>Click me!</div>
  )
}

export default UpdateNestedObjects

// 
// Define the state type
type State = {
    user: {
      name: string;
      address: {
        city: string;
        zipCode: string;
      };
    };
  };
  
  // Initial state with a nested object
  const initialState: State = {
    user: {
      name: "John",
      address: {
        city: "New York",
        zipCode: "10001",
      },
    },
  };
  
  // Function to update the nested object's property
  const updateNestedObject = (
    oldState: State,
    propertyToUpdate: string,
    newValue: any
  ): State => {
    return {
      ...oldState,
      user: {
        ...oldState.user,
        [propertyToUpdate]: newValue, // Update the specified property
      },
    };
  };
  
  // Example usage
  const newState: State = updateNestedObject(initialState, "name", "Jane");
  
  console.log(newState);
  // {
  //   user: {
  //     name: "Jane",
  //     address: {
  //       city: "New York",
  //       zipCode: "10001",
  //     },
  //   },
  // }
  