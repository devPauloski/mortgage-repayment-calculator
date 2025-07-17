export default function MortgageOptions() {
  return (
    <fieldset>
      <legend>Mortgage Type</legend>
      <div>
        <label htmlFor="repayment">
          <input type="radio" id="repayment" name="mortgageType" />
          Repayment
        </label>
        <label htmlFor="interest-only">
          <input type="radio" id="interest-only" name="mortgageType" />
          Interest Only
        </label>
      </div>
    </fieldset>
  );
}
