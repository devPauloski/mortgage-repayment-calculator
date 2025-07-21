import calculatorIcon from "/src/assets/images/icon-calculator.svg";

export default function SubmitButton() {
  return (
    <button
      className="inline-flex w-full cursor-pointer flex-wrap items-center justify-center gap-3 rounded-full bg-lime px-[5%] py-4 leading-[1] text-slate-900"
      type="submit"
    >
      <img src={calculatorIcon} alt="" />
      <span>Calculate Repayments</span>
    </button>
  );
}
