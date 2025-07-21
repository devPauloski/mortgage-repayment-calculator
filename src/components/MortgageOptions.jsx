import MortgageOption from "./mortgageOption";

export default function MortgageOptions({ mortgageType, setMortgageType }) {
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
      <span className="mt-1 hidden">This field is require</span>
    </fieldset>
  );
}
