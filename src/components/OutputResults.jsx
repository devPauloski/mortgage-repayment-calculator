export default function OutputResults({ results }) {
  return (
    <div>
      <h2 className="mb-5 text-2xl leading-tight font-bold text-white md:text-[1.625rem]">
        Your results
      </h2>
      <p className="mb-5 md:mb-8">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="rounded-lg border-t-5 border-lime bg-slate-950 px-4 py-6">
        <div className="mb-4.5 border-b-1 border-slate-700 pb-4.5 md:mb-8 md:pb-8">
          <p className="mb-4">Your monthly repayments</p>
          <p className="text-4xl font-bold md:text-[2.625rem] text-lime">
            &pound;{results.monthly}
          </p>
        </div>
        <div>
          <p className="mb-4">Total you'll repay over the term</p>
          <p className="text-2xl font-bold text-white">
            &pound;{results.total}
          </p>
        </div>
      </div>
    </div>
  );
}
