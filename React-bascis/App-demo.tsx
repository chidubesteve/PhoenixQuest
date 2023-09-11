// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import React, { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/cart";
// import Like from "./components/Like";

function App() {
  // let items = ["Enugu", "Lagos", "Abuja", "Anambra", "Port Harcourt"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }
  // const [visible, setVisibility] = useState(false)

  // const handleButtonClick = () => {
  //   setVisibility(true) //make it visible when clicked
  // }
  // const [cartItems, setCartItems] = useState(['Product1', 'Product2'])

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Phoenix"
  //   }
  // })

  const [pizza, setPizza] = useState({
    name: "spicy double-decker",
    toppings: ["cheese"],
  });

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id:"101",name:'product1', quantity: 1},
      {id:"102",name:'product2',quantity :2}
    ]
  })

  const handleButtonClick = () => {
    // OR
    //  // Use the spread operator to copy the existing toppings and add a new one
    //  setPizza((prevPizza) => {
    //   return { ...prevPizza, toppings: [...prevPizza.toppings, 'mushroom'] };
    // });
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "mushroom"] });

      // or
    // using the `.push()` method => it's important to note that when working with React state, you should always create a new object or array to trigger a re-render. Here's how you can do it:

    // const updatedPizza = { ...pizza };
    // updatedPizza.toppings.push('mushroom');
    // setPizza(updatedPizza);


// setCart({...cart, items: cart.items.map(item => item.id === "101" ? {...item, quantity: item.quantity + 1} : item)})
  };
  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
      {/* <div>
        {visible && <Alert onClose={() => setVisibility(false)}>
          Hey <strong className="mr-1 ml-1">Web3Phoenix!</strong> You're doing great
        </Alert>}
     
      </div> */}
      {/* <div>
        <Button color="primary" onClick={handleButtonClick}>
          Click Me!
        </Button>
      </div> */}
      {/* <Like onClick={() => console.log("I have been clicked")}/> */}
      {/* <NavBar cartItemsCount={cartItems.length}/>
  <Cart cartItems={cartItems} onClear={() => setCartItems([])}/> */}
      <button
        onClick={() => {
          handleButtonClick;
          console.log(pizza);
        }}
      >
        Click ME
      </button>
      <pre>{JSON.stringify(pizza, null, 2)}</pre>
    </>
  );
}

export default App
