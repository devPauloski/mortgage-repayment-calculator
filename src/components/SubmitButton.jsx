import calculatorIcon from "/src/assets/images/icon-calculator.svg";

export default function SubmitButton() {
  return (
    <button type="submit">
      <img src={calculatorIcon} alt="" />
      <span>Calculate Repayments</span>
    </button>
  );
}
