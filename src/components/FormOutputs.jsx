import OutputEmpty from "./OutputEmpty";
import OutputResults from "./OutputResults";

export default function FormOutputs() {
  return (
    <section className="bg-slate-900 text-slate-300 py-8 px-4 grid md:rounded-br-2xl md:rounded-tr-2xl md:rounded-bl-[4rem]">
      <OutputEmpty />
      <OutputResults />
    </section>
  );
}
