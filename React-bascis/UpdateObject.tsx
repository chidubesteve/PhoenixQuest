// initial object date
const initialState = {
    name: "Web3Phoenix",
    age: 20,
}

// function to update the state
const UpdateObject2 = (oldObject: object, newProperties: object) => {
    return {
        ...oldObject, // spread operator copies all properties from oldObject into a new Object
        ...newProperties   // and then adds/updates any property in newProperties.
    }
}
// example usage 
const updatedState = UpdateObject2(initialState, {age: 18})
console.log(updatedState)


// OR with useState() hook
import React, {useState} from 'react'

const UpdateObject = () => {
const [profile, setProfile] = useState({
    name: "Web3Phoenix",
    age: 20,
})

        const handleObjectUpdate = () =>  {
            setProfile({...profile, age: 18})
        }
  return (
    <div>
        <button onClick={handleObjectUpdate}>Click Me</button>
    </div>
  )
}

export default UpdateObject