import Button from "./components/button";
import { useState } from "react";

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    alert(`Hello, ${user.firstName} ${user.lastName}!`)
  }
  return (

    
    <div>
      <h1>Hello, world!</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
