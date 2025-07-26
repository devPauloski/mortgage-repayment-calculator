export default function OutputResults({results}) {
  return (
    <div>
      <h2 className="text-white text-[1.375rem]">Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <p>
        <span>Your monthly repayments</span>
        <span>&pound;{results.monthly}</span>
      </p>
      <p>
        <span>Total you'll repay over the term</span>
        <span>&pound;{results.total}</span>
      </p>
    </div>
  );
}
