export default function InputRate({ rate, setRate, errors }) {
  function handleRate(event) {
    let inputValue = event.target.value.replace(/[^0-9.]/g, "");
    const parts = inputValue.split(".");

    if (parts.length > 2) {
      inputValue = parts[0] + "." + parts[1];
    }

    if (parts[0].length > 2) {
      parts[0] = parts[0].slice(0, 2);
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

    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      parts[0] = parseInt(parts[0]);
      if (parts[1] === undefined) {
        inputValue = parts[0];
      } else {
        inputValue = parts[0] + "." + parts[1];
      }
    } else {
      inputValue = "";
    }

    setRate(inputValue);
  }
  
  return (
    <div className="md:flex-1">
      <label className="mb-2 block" htmlFor="interest-rate">
        Interest Rate
      </label>
      <input
        style={{
          outline: errors.rate && "1px solid hsl(4, 69%, 50%)",
        }}
        type="text"
        inputMode="decimal"
        value={rate}
        autoComplete="off"
        placeholder="2 - 20"
        onChange={(event) => handleRate(event)}
        id="interest-rate"
        name="rate"
        className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-2 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
      />
      <span
        style={{
          backgroundColor: errors.rate && "hsl(4, 69%, 50%)",
          color: errors.rate && "hsl(0, 0%, 100%)",
        }}
        className="relative block bg-slate-100 text-slate-700 before:absolute before:right-0 before:bottom-0 before:grid before:h-12.5 before:w-13 before:place-items-center before:rounded-r-sm before:bg-inherit before:font-bold before:text-inherit before:content-['%'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"
      ></span>
      {errors.rate && (
        <span
          aria-live="polite"
          className="mt-1 inline-block text-[.8125rem] text-red"
        >
          {errors.rate}
        </span>
      )}
    </div>
  );
}
