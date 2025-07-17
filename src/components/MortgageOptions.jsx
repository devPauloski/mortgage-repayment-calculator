export default function MortgageOptions() {
  return (
    <fieldset className="mb-5.5">
      <legend className="mb-2.5">Mortgage Type</legend>
      <div>
        <label
          className="border-1 flex items-center gap-2 h-14 cursor-pointer p-4 mb-2.5 rounded-sm"
          htmlFor="repayment"
        >
          <input type="radio" id="repayment" name="mortgageType" />
          <span>Repayment</span>
        </label>
        <label
          className="border-1 flex items-center gap-2 h-14 cursor-pointer p-4 rounded-sm"
          htmlFor="interest-only"
        >
          <input type="radio" id="interest-only" name="mortgageType" />
          <span>Interest Only</span>
        </label>
      </div>
    </fieldset>
  );
}
