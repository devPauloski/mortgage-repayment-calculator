export default function InputAmount({ amount, handleAmount}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div>
        <input
          type="text"
          inputMode="decimal"
          value={amount}
          autoComplete="off"
          onChange={(event) => handleAmount(event)}
          id="mortgage-amount"
          name="amount"
          placeholder="5,000 - 20,000,00"
          className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-13 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
        />
        <span className="relative block bg-slate-100 before:absolute before:bottom-0 before:left-0 before:grid before:h-12.5 before:w-11 before:place-items-center before:rounded-l-sm before:bg-inherit before:font-bold before:text-slate-700 before:content-['\00A3'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
        <span className="mt-1 hidden">This field is require</span>
      </div>
    </div>
  );
}
