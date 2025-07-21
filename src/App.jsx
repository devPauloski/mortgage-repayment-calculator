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

  function handleReset() {
    setAmount('');
    setTerm('');
    setRate('');
    setMortgageType('');
  }

  return (
    <FormWrapper>
      <FormInputs>
        <Header handleReset={handleReset} />
        <InputAmount amount={amount} setAmount={setAmount} />
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
