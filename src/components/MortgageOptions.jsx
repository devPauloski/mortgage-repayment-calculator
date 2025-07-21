export default function MortgageOptions() {
  return (
    <fieldset className="mb-5.5">
      <legend className="mb-2.5">Mortgage Type</legend>
      <div>
        <label
          className="mb-2.5 flex h-14 cursor-pointer items-center gap-2 rounded-sm border-1 p-4"
          htmlFor="repayment"
        >
          <input type="radio" id="repayment" name="mortgageType" />
          <span>Repayment</span>
        </label>
        <label
          className="flex h-14 cursor-pointer items-center gap-2 rounded-sm border-1 p-4"
          htmlFor="interest-only"
        >
          <input type="radio" id="interest-only" name="mortgageType" />
          <span>Interest Only</span>
        </label>
      </div>
    </fieldset>
  );
}
