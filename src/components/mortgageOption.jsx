export default function MortgageOption({
  id,
  name = "mortgageType",
  value,
  checked,
  onChange,
  mb = "mb-0",
}) {
  return (
    <label
      htmlFor={id}
      className={`flex h-14 cursor-pointer items-center gap-4 rounded-sm border p-4 hover:border-lime has-checked:border-lime has-checked:bg-pale-lime ${mb}`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`aspect-square w-3 cursor-pointer appearance-none rounded-full outline-2 outline-slate-300 checked:bg-lime checked:outline-2 checked:outline-offset-2 checked:outline-lime`}
      />
      <span className="font-bold text-slate-900">{value}</span>
    </label>
  );
}
