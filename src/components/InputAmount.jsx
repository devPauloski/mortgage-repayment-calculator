export default function InputAmount() {
  return (
    <div className="mb-5.5">
      <label className="mb-2 block" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div>
        <input
          className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-13 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
          type="text"
          id="mortgage-amount"
          name="amount"
        />
        <span className="relative block bg-slate-100 before:absolute before:bottom-0 before:left-0 before:grid before:h-12.5 before:w-11 before:place-items-center before:rounded-l-sm before:bg-inherit before:font-bold before:text-slate-700 before:content-['\00A3'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
        <span className="hidden mt-1">This field is require</span>
      </div>
    </div>
  );
}
