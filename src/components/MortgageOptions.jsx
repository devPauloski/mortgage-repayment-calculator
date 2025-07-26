import MortgageOption from "./MortgageOption.jsx";

export default function MortgageOptions({
  mortgageType,
  setMortgageType,
  errors,
}) {
  return (
    <fieldset className="mb-5.5">
      <legend className="mb-2.5">Mortgage Type</legend>
      <MortgageOption
        id="repayment"
        value="Repayment"
        checked={mortgageType === "Repayment"}
        onChange={(event) => setMortgageType(event.target.value)}
        mb="mb-2.5"
      />
      <MortgageOption
        id="interest-only"
        value="Interest Only"
        checked={mortgageType === "Interest Only"}
        onChange={(event) => setMortgageType(event.target.value)}
      />
      {errors.mortgageType && (
        <span className="mt-1 inline-block text-[.8125rem] text-red">
          {errors.mortgageType}
        </span>
      )}
    </fieldset>
  );
}
