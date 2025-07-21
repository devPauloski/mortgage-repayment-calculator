export default function InputRate() {
  return (
    <div className="mb-5">
      <label className="mb-2 block" htmlFor="interest-rate">
        Interest Rate
      </label>
      <div>
        <input
          className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-2 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
          type="text"
          id="interest-rate"
          name="rate"
        />
        <span className="relative block bg-slate-100 before:absolute before:right-0 before:bottom-0 before:grid before:h-12.5 before:w-13 before:place-items-center before:rounded-r-sm before:bg-inherit before:font-bold before:text-slate-700 before:content-['%'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
        <span className="mt-1 hidden">This field is require</span>
      </div>
    </div>
  );
}
