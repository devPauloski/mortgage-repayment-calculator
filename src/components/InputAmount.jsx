export default function InputAmount() {
  return (
    <div className="mb-5.5">
      <label className="block mb-2" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div>
        <input
          className="peer w-full h-12.5 border-0 rounded-sm pl-13 outline outline-slate-500 focus-visible:outline-2 focus-visible:outline-lime cursor-pointer"
          type="text"
          id="mortgage-amount"
          name="amount"
        />
        <span className="relative block before:bg-slate-100 before:absolute before:w-11 before:h-12 before:content-['\00A3'] before:left-[1px] before:bottom-[1px] before:grid before:place-items-center before:rounded-l-[.1875rem] before:font-bold before:text-slate-700 peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
      </div>
    </div>
  );
}
