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
    let inputValue = event.target.value.replace(/[^0-9.]/g, "");
    const parts = inputValue.split(".");

    if (parts.length > 2) {
      inputValue = parts[0] + "." + parts[1];
    }

    if (parts[0].length > 8) {
      parts[0] = parts[0].slice(0, 8);
      if (parts[1] === undefined) {
        inputValue = parts[0];
      } else {
        inputValue = parts[0] + "." + parts[1];
      }
    }

    if (parts.length === 2) {
      parts[1] = parts[1].slice(0, 2);
      inputValue = parts[0] + "." + parts[1];
    }

    setAmount(() => formatAmount(inputValue));
  }

  function handleTerm(event) {
    let inputValue = event.target.value.replace(/[^0-9]/g, "");

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2);
    }

    const number = parseFloat(inputValue);
    if (isNaN(number)) {
      inputValue = "";
    } else {
      inputValue = parseInt(inputValue)
    }

    setTerm(inputValue);
  }

  function handleRate(event) {
    let inputValue = event.target.value.replace(/[^0-9.]/g, "");
    const parts = inputValue.split(".");

    if (parts.length > 2) {
      inputValue = parts[0] + "." + parts[1];
    }

    if (parts[0].length > 2) {
      parts[0] = parts[0].slice(0, 2);
      if (parts[1] === undefined) {
        inputValue = parts[0];
      } else {
        inputValue = parts[0] + "." + parts[1];
      }
    }

    if (parts.length === 2) {
      parts[1] = parts[1].slice(0, 1);
      inputValue = parts[0] + "." + parts[1];
    }

    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      parts[0] = parseInt(parts[0]);
      if (parts[1] === undefined) {
        inputValue = parts[0];
      } else {
        inputValue = parts[0] + "." + parts[1];
      }
    } else {
      inputValue = "";
    }

    setRate(inputValue);
  }

  function formatAmount(userInput) {
    const number = parseFloat(userInput);
    if (!isNaN(number)) {
      const [integerPart, decimalPart] = userInput.split(".");
      const formatted = new Intl.NumberFormat().format(parseInt(integerPart));
      return decimalPart !== undefined
        ? `${formatted}.${decimalPart}`
        : formatted;
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
          <InputTerm term={term} handleTerm={handleTerm} />
          <InputRate rate={rate} handleRate={handleRate} />
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
