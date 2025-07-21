import illustrationEmptyImage from "/src/assets/images/illustration-empty.svg";

export default function OutputEmpty() {
  return (
    <div className="flex flex-col items-center text-center md:self-center">
      <img
        className="mb-8.5"
        src={illustrationEmptyImage}
        alt="Empty illustration"
      />
      <h2 className="mb-5.5 text-2xl leading-tight font-bold text-white">
        Results shown here
      </h2>
      <p className="max-w-[32ch] md:max-w-[38ch]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
