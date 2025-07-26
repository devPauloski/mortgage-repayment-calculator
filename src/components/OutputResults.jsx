export default function OutputResults({results}) {
  return (
    <div>
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <p>
        <span>Your monthly repayments</span>
        <output>{results.monthly}</output>
      </p>
      <p>
        <span>Total you'll repay over the term</span>
        <output>{results.total}</output>
      </p>
    </div>
  );
}
