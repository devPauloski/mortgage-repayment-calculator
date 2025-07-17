import calculatorIcon from "/src/assets/images/icon-calculator.svg";

export default function SubmitButton() {
  return (
    <button
      className="inline-flex gap-3 items-center justify-center text-slate-900 w-full py-4 px-[5%] bg-lime rounded-full cursor-pointer flex-wrap leading-[1]"
      type="submit"
    >
      <img src={calculatorIcon} alt="" />
      <span>Calculate Repayments</span>
    </button>
  );
}
