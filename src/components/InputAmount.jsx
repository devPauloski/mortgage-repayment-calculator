export default function InputAmount({ amount, setAmount, formatAmount, errors }) {
  function handleAmount(event) {
    let inputValue = event.target.value.replace(/[^0-9.]/g, "");
    const parts = inputValue.split(".");

    if (parts.length > 2) {
      inputValue = parts[0] + "." + parts[1];
    }

    if (parts[0].length > 8) {
      parts[0] = parts[0].slice(0, 8);
      if (parts[1] === undefined) {
        inputValue = parts[0];
      } else {
        inputValue = parts[0] + "." + parts[1];
      }
    }

    if (parts.length === 2) {
      parts[1] = parts[1].slice(0, 2);
      inputValue = parts[0] + "." + parts[1];
    }

    setAmount(() => formatAmount(inputValue));
  }

  return (
    <div>
      <label className="mb-2 block" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <input
        style={{
          outline: (errors.amount) && "1px solid hsl(4, 69%, 50%)",
        }}
        type="text"
        inputMode="decimal"
        value={amount}
        autoComplete="off"
        onChange={(event) => handleAmount(event)}
        id="mortgage-amount"
        name="amount"
        placeholder="5,000 - 25,000,000"
        className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-13 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
      />
      <span
        style={{
          backgroundColor: errors.amount && "hsl(4, 69%, 50%)",
          color: errors.amount && "hsl(0, 0%, 100%)",
        }}
        className="relative block bg-slate-100 text-slate-700 before:absolute before:bottom-0 before:left-0 before:grid before:h-12.5 before:w-11 before:place-items-center before:rounded-l-sm before:bg-inherit before:font-bold before:text-inherit before:content-['\00A3'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"
      ></span>
      {errors.amount && (
        <span
          aria-live="polite"
          className="mt-1 inline-block text-[.8125rem] text-red"
        >
          {errors.amount}
        </span>
      )}
    </div>
  );
}
