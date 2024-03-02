import "./App.css";
import Bill from "./components/Bill";
import Rating from "./components/Rating";
import Tab from "./components/Tab";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState([5, 5]);

  function handleChangeTipPercent(id, newPercentage) {
    setTipPercentage((prev) =>
      prev.map((percentage, index) =>
        index === id ? newPercentage : percentage
      )
    );
    console.log(tipPercentage);
  }

  return (
    <>
      <Bill amount={billAmount} onChangeAmount={setBillAmount} />
      <Rating id={0} onChangeTipPercent={handleChangeTipPercent}>
        How did you like the service?
      </Rating>
      <Rating id={1} onChangeTipPercent={handleChangeTipPercent}>
        How did your friend like the service?
      </Rating>
      <Tab
        bill={billAmount}
        tip={Math.ceil(
          (billAmount * (tipPercentage.at(0) + tipPercentage.at(1))) / 2 / 100
        )}
      />
      <Reset
        setBillAmount={setBillAmount}
        setTipPercentage={setTipPercentage}
      />
    </>
  );
}

export default App;
