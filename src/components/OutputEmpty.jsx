import illustrationEmptyImage from "/src/assets/images/illustration-empty.svg";

export default function OutputEmpty() {
  return (
    <div className="flex items-center flex-col text-center md:self-center">
      <img 
      className="mb-8.5"
      src={illustrationEmptyImage} alt="Empty illustration" />
      <h2 className="text-2xl font-bold text-white leading-tight mb-5.5">Results shown here</h2>
      <p className="max-w-[32ch] md:max-w-[38ch]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
