import { useState } from "react";
import FormWrapper from "./components/FormWrapper.jsx";
import FormInputs from "./components/FormInputs.jsx";
import Header from "./components/Header.jsx";
import InputAmount from "./components/InputAmount.jsx";
import InputTerm from "./components/InputTerm.jsx";
import InputRate from "./components/InputRate.jsx";
import MortgageOptions from "./components/MortgageOptions.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import FormOutputs from "./components/FormOutputs.jsx";

export default function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");

  function handleAmount(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, "");
    const splitValue = inputValue.split(".");

    if (splitValue.length > 2) {
      inputValue = splitValue[0] + "." + splitValue[1];
    }

    if (splitValue.length === 2) {
      splitValue[1] = splitValue[1].slice(0, 2);
      inputValue = splitValue[0] + "." + splitValue[1];
    }

    setAmount(() => formatAmount(inputValue));
  }

  function formatAmount(input) {
    const number = parseFloat(input);
    if (!isNaN(number)) {
      const [integerPart, decimalPart] = input.split(".");
      const formatted = new Intl.NumberFormat().format(parseInt(integerPart));
      return decimalPart !== undefined ? `${formatted}.${decimalPart}` : formatted;
    } else {
      return "";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleReset() {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
  }

  return (
    <FormWrapper handleSubmit={handleSubmit}>
      <FormInputs>
        <Header handleReset={handleReset} />
        <InputAmount amount={amount} handleAmount={handleAmount} />
        <div className="flex flex-col gap-5 md:flex-1 md:flex-row">
          <InputTerm terms={term} setTerm={setTerm} />
          <InputRate rate={rate} setRate={setRate} />
        </div>
        <MortgageOptions
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
        />
        <SubmitButton />
      </FormInputs>
      <FormOutputs />
    </FormWrapper>
  );
}
