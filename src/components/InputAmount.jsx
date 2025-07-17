export default function InputAmount() {
  return (
    <div className="mb-5.5">
      <label className="block mb-2" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm pl-13"
          type="text"
          id="mortgage-amount"
          name="amount"
        />
        <span className="relative block before:bg-slate-100 before:absolute before:w-11 before:h-12 before:content-['\00A3'] before:left-[1px] before:bottom-[1px] before:grid before:place-items-center before:rounded-l-[.1875rem] before:font-bold"></span>
      </div>
    </div>
  );
}
