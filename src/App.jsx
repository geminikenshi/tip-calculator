import "./App.css";
import Bill from "./components/Bill";
import Rating from "./components/Rating";
import Tab from "./components/Tab";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);

  return (
    <>
      <Bill amount={billAmount} onChangeAmount={setBillAmount} />
      <Rating>How did you like the service?</Rating>
      <Rating>How did your friend like the service?</Rating>
      <Tab bill={billAmount} tip={5} />
      <Reset />
    </>
  );
}

export default App;
