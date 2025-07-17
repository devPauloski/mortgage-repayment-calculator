import illustrationEmptyImage from "/src/assets/images/illustration-empty.svg";

export default function OutputEmpty() {
  return (
    <div className="flex items-center flex-col">
      <img 
      className="mb-8.5"
      src={illustrationEmptyImage} alt="Empty illustration" />
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
