// initial array state
const initialArray = ['1', '2', '3', '4'];

// function to update the array state
const addElementToArray  = (oldArray: any, newItems: string) => {
    return [...oldArray, ...newItems]
}

// example
const updateArray = addElementToArray(initialArray,  "5")

console.log(updateArray)

// or with useState Hook
import React, {useState} from 'react';
import produce from 'immer';


const [array, setArray] = useState([
    '1','2','3','4']);

   const  handleArrayUpdate = () => {
        // to add an object- we will not use the .push() method
        setArray([...array, '5'])

        // to remove an item
        setArray(array.filter(item => item !== "2"))

        // update
        setArray(array.map((item) => item == '3'? '33' : item));
    }

const UpdateArray = () => {
  return (
    <button onClick={handleArrayUpdate}>Click me!</button>
  )
}

export default UpdateArray
