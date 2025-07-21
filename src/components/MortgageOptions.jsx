export default function MortgageOptions() {
  return (
    <fieldset className="mb-5.5">
      <legend className="mb-2.5">Mortgage Type</legend>
      <div>
        <label
          className="mb-2.5 flex h-14 cursor-pointer items-center gap-4 rounded-sm border-1 p-4 hover:border-1 hover:border-lime has-checked:border-1 has-checked:border-lime has-checked:bg-pale-lime"
          htmlFor="repayment"
        >
          <input
            className="aspect-square w-3 cursor-pointer appearance-none rounded-full outline-2 outline-slate-300 checked:bg-lime checked:outline-2 checked:outline-offset-2 checked:outline-lime"
            type="radio"
            id="repayment"
            name="mortgageType"
          />
          <span className="font-bold text-slate-900">Repayment</span>
        </label>
        <label
          className="flex h-14 cursor-pointer items-center gap-4 rounded-sm border-1 p-4 hover:border-1 hover:border-lime has-checked:border-1 has-checked:border-lime has-checked:bg-pale-lime"
          htmlFor="interest-only"
        >
          <input
            className="aspect-square w-3 cursor-pointer appearance-none rounded-full outline-2 outline-slate-300 checked:bg-lime checked:outline-2 checked:outline-offset-2 checked:outline-lime"
            type="radio"
            id="interest-only"
            name="mortgageType"
          />
          <span className="font-bold text-slate-900">Interest Only</span>
        </label>
        <span className="mt-1 hidden">This field is require</span>
      </div>
    </fieldset>
  );
}
