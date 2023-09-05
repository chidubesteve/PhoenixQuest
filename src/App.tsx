import React, {useState} from "react";
// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Enugu", "Lagos", "Abuja", "Anambra", "Port Harcourt"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }
  const [visible, setVisibility] = useState(false)

  const handleButtonClick = () => {
    setVisibility(true) //make it visible when clicked
  }
  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
      <div>
        {visible && <Alert onClose={() => setVisibility(false)}>
          Hey <strong className="mr-1 ml-1">Web3Phoenix!</strong> You're doing great
        </Alert>}
     
      </div>
      <div>
        <Button color="primary" onClick={handleButtonClick}>
          Click Me!
        </Button>
      </div>
    </>
  );
}

export default App;
