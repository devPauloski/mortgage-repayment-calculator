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
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState(null);

  // Validation
  function validate() {
    const errorLogs = {};

    // Amount
    const numericAmount = parseFloat(amount.replace(/,/g, ""));
    if (isNaN(numericAmount)) {
      errorLogs.amount = "This field is required";
    } else if (numericAmount < 5000 || numericAmount > 25_000_000) {
      errorLogs.amount = "Must be between £5,000 and £25,000,000";
    }

    // Term
    const numericTerm = parseFloat(term);
    if (isNaN(numericTerm)) {
      errorLogs.term = "This field is required";
    } else if (numericTerm < 1 || numericTerm > 30) {
      errorLogs.term = "Must be between 1 and 30";
    }

    // Rate
    const numericRate = parseFloat(rate);
    if (isNaN(numericRate)) {
      errorLogs.rate = "This field is required";
    } else if (numericRate < 2 || numericRate > 20) {
      errorLogs.rate = "Must be between 2% and 20%";
    }

    // Mortgage Type
    if (!mortgageType) {
      errorLogs.mortgageType = "This field is required";
    }

    return errorLogs;
  }

  // Currency formatting
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

  // Calculate result
  function calculateResults() {
    const p = Number(amount.replace(/,/g, ""));
    const n = Number(term) * 12;
    const r = (Number(rate) / 100) / 12;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;

    setResults({
      monthly: formatAmount(monthly.toFixed(2)),
      total: formatAmount(total.toFixed(2)),
    });
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();
    const errorLogs = validate();

    if (Object.keys(errorLogs).length) {
      setErrors(errorLogs);
      setResults(null);
    } else {
      calculateResults();
      setErrors({});
    }
  }

  // Handle Reset
  function handleReset() {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
    setErrors({});
    setResults(null);
  }

  return (
    <FormWrapper handleSubmit={handleSubmit}>
      <FormInputs>
        <Header handleReset={handleReset} />
        <InputAmount
          amount={amount}
          setAmount={setAmount}
          formatAmount={formatAmount}
          errors={errors}
        />
        <div className="flex flex-col gap-5 md:flex-row">
          <InputTerm term={term} setTerm={setTerm} errors={errors} />
          <InputRate rate={rate} setRate={setRate} errors={errors} />
        </div>
        <MortgageOptions
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          errors={errors}
        />
        <SubmitButton />
      </FormInputs>
      <FormOutputs results={results} />
    </FormWrapper>
  );
}
